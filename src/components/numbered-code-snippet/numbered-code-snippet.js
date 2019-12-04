import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import classnames from 'classnames';
import CopyButton from '@mapbox/mr-ui/copy-button';

function getWindow() {
  if (typeof window === undefined) {
    throw new Error('window not available');
  }
  return window;
}

// Theme cache, used to prevent the creation of multiple <style> elements with the same content.
const injectedThemes = [];

export default class NumberedCodeSnippet extends React.PureComponent {
  static propTypes = {
    /** Raw (unhighlighted) code. When the user clicks a copy button, this is what they'll get. If no `highlightedCode` is provided, `code` is displayed. */
    code: PropTypes.string.isRequired,
    /** The HTML output of running code through a syntax highlighter. If this is not provided, `code` is displayed, instead. The default theme CSS assumes the highlighter is [`highlight.js`](https://github.com/isagalaev/highlight.js). If you are using another highlighter, provide your own theme. */
    highlightedCode: PropTypes.string,
    /** Specific line ranges that should be independently copiable. Each range is a two-value array, consisting of the starting and ending line. If this is not provided, the entire snippet is copiable. */
    copyRanges: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    /** A maximum height for the snippet. If the code exceeds this height, the snippet will scroll internally. */
    maxHeight: PropTypes.number,
    /** A callback that is invoked when the snippet (or a chunk of the snippet) is copied. If `copyRanges` are provided, the callback is passed the index (0-based) of the chunk that was copied. */
    onCopy: PropTypes.func,
    /** CSS that styles the highlighted code. The default theme is a [`highlight.js` theme](https://highlightjs.readthedocs.io/en/latest/style-guide.html#defining-a-theme) theme. It is the dark theme used on mapbox.com's installation flow. */
    highlightThemeCss: PropTypes.string.isRequired,
    /** The width of a character in the theme's monospace font, used for indentation. If you use a font or font-size different than the default theme, you may need to change this value. */
    characterWidth: PropTypes.number,
    /** If the first live chunk (from the `copyRanges` prop) is not visible in the snippet given the `maxHeight`, then autoscroll to make sure the live chunk is in view when the page loads. **/
    scrollToLive: PropTypes.bool
  };

  static defaultProps = {
    characterWidth: 7.225, // Will need to change this if we change font size
    scrollToLive: true
  };

  componentDidMount() {
    this.adjustPositions();
    getWindow().addEventListener('resize', this.adjustPositions);

    const theme = this.props.highlightThemeCss;

    // Do not load themes that have already been injected.
    if (injectedThemes.indexOf(theme) !== -1) return;
    injectedThemes.push(theme);
    const doc = getWindow().document;
    this.styleTag = doc.createElement('style');
    this.styleTag.innerHTML = `${theme}`;
    doc.head.appendChild(this.styleTag);
  }

  componentDidUpdate() {
    this.adjustPositions();
    if (this.props.scrollToLive && this.props.maxHeight) {
      let offsetFromTop = null;
      if (this.firstLiveElement && this.firstLiveElement.offsetTop !== null) {
        /* Get the offset from top of parent element. */
        offsetFromTop = this.firstLiveElement.offsetTop;
        if (this.firstLiveElement.offsetParent) {
          this.firstLiveElement.offsetParent.scrollTop = offsetFromTop - 18;
        }
      }
    }
  }

  componentWillUnmount() {
    getWindow().removeEventListener('resize', this.adjustPositions);
  }

  adjustPositions = debounce(() => {
    const { containerElement } = this;
    if (!containerElement) return;

    const chunkOverlays = containerElement.querySelectorAll(
      '[data-chunk-overlay]'
    );
    for (let i = 0, l = chunkOverlays.length; i < l; i++) {
      const overlayElement = chunkOverlays[i];
      const chunkId = overlayElement.getAttribute('data-chunk-overlay');
      const codeElement = containerElement.querySelector(
        `[data-chunk-code="${chunkId}"]`
      );
      if (!codeElement)
        throw new Error(
          `No code element found with [data-chunk-code="${chunkId}"]`
        );
      const copyElement = containerElement.querySelector(
        `[data-chunk-copy="${chunkId}"]`
      );
      if (!copyElement)
        throw new Error(
          `No copy element found with [data-chunk-copy="${chunkId}"]`
        );

      overlayElement.style.top = `${codeElement.offsetTop}px`;
      copyElement.style.top = `${codeElement.offsetTop + 2}px`;
      overlayElement.style.height = `${codeElement.clientHeight}px`;

      // Since these elements move into position a split-second after the component
      // mounts and renders, we'll fade them in after they're positioned
      overlayElement.style.opacity = '1';
      copyElement.style.opacity = '1';
    }
  }, 300);

  onContainerElement = element => {
    this.containerElement = element;
  };

  onFirstLive = element => {
    this.firstLiveElement = element;
  };

  render() {
    const { props } = this;

    const rawCodeLines = props.code.trim().split('\n');
    // If highlightedCode is not provided, show raw code.
    const displayCode = props.highlightedCode || props.code;
    const splitDisplayCode = displayCode.trim().split('\n');

    // Use copyRanges to split the highlighted code into chunks,
    // some of which are "live", i.e. copyable, some which are not.
    // If there are no copyRanges, the whole snippet is copyable and there
    // is no fancy live-chunk styling.
    const mutableCopyRanges =
      props.copyRanges !== undefined && props.copyRanges.slice();
    let currentLiveRange = mutableCopyRanges && mutableCopyRanges.shift();
    let currentChunk = [];
    const allChunks = [];
    const endCurrentChunk = ({ live }) => {
      allChunks.push({
        live,
        highlightedLines: currentChunk.map(line => line.highlighted),
        raw: currentChunk.reduce(
          (result, line) => (result += line.raw + '\n'),
          ''
        ),
        element: undefined
      });
      currentChunk = [];
    };
    for (let i = 0, l = splitDisplayCode.length; i < l; i++) {
      const chunk = splitDisplayCode[i];
      const lineNumber = i + 1;
      if (currentLiveRange && lineNumber === currentLiveRange[0]) {
        endCurrentChunk({ live: false });
      } else if (currentLiveRange && lineNumber > currentLiveRange[1]) {
        endCurrentChunk({ live: true });
        currentLiveRange = mutableCopyRanges && mutableCopyRanges.shift();
      }
      currentChunk.push({
        highlighted: chunk,
        raw: rawCodeLines[i]
      });
    }
    if (currentChunk.length) {
      endCurrentChunk({ live: false });
    }

    const codeElements = [];
    const highlightElements = [];
    const copyElements = [];
    let previousCount = 0;
    let liveChunkCount = -1; // Incremented to give CopyButtons an identifier
    allChunks.forEach((codeChunk, i) => {
      const chunkId = `chunk-${i}`;

      const lineEls = codeChunk.highlightedLines.map((line, i) => {
        // Left padding is determined below
        let lineClasses = 'pr12';
        if (codeChunk.live) lineClasses += ' py3';
        if (!codeChunk.live && props.copyRanges !== undefined)
          lineClasses += ' opacity50 bg-darken10';

        // Remove leading spaces, which are replaced with padding to avoid
        // weird behaviors that occur when there are long unbroken strings:
        // a line break might be introduced between the leading spaces and the
        // long word, creating an empty line that nobody wanted.
        const indentingSpacesMatch = line.match(/^[ ]*/);
        const indentingSpaces = indentingSpacesMatch
          ? indentingSpacesMatch[0]
          : '';
        const indentingSpacesCount = indentingSpaces.length;
        const paddingLeft = indentingSpacesCount * props.characterWidth + 12;
        const displayLine = line.replace(/^[ ]*/, '');

        const lineNumberClasses = classnames(
          'absolute fl color-gray align-r pr6',
          {
            'w30 py3': codeChunk.live,
            w36: !codeChunk.live
          }
        );
        let blueLineWidth = 0;
        if (codeChunk.live) blueLineWidth = 6;

        /* eslint-disable react/no-danger */
        return (
          <div key={i} className={lineClasses} style={{ paddingLeft }}>
            <div
              className={lineNumberClasses}
              unselectable="on"
              style={{
                marginLeft: -1 * (paddingLeft - blueLineWidth),
                marginTop: -1 * (blueLineWidth / 2)
              }}
              data-content={previousCount + i + 1}
            />
            <div
              // We must use dangerouslySetInnerHTML because we've already
              // highlighted the code with lowlight, so we have an HTML string
              dangerouslySetInnerHTML={{ __html: displayLine || ' ' }}
              // Super fancy hanging indent
              style={{
                textIndent: -2 * props.characterWidth,
                marginLeft: 6 * props.characterWidth
              }}
            />
          </div>
        );
        /* eslint-enable react/no-danger */
      });

      /* For the first live chunk, add a ref. */
      if (codeChunk.live && i < 2) {
        codeElements.push(
          <div
            key={i}
            // z-index this line above the highlighted background element for
            // live chunks
            ref={this.onFirstLive}
            className="relative z2"
            data-chunk-code={chunkId}
          >
            {lineEls}
          </div>
        );
      } else {
        codeElements.push(
          <div
            key={i}
            // z-index this line above the highlighted background element for
            // live chunks
            className="relative z2"
            data-chunk-code={chunkId}
          >
            {lineEls}
          </div>
        );
      }

      if (codeChunk.live) {
        highlightElements.push(
          <div
            key={i}
            data-chunk-overlay={chunkId}
            className="bg-lighten50 absolute left right"
            style={{ opacity: 0 }}
          >
            <div className="bg-blue h-full w6" />
          </div>
        );

        const chunkIndex = ++liveChunkCount;
        const onCopyChunk = () => this.props.onCopy(chunkIndex);

        if (props.onCopy) {
          copyElements.push(
            <div
              key={i}
              data-chunk-copy={chunkId}
              className="absolute z3 right mr3 color-white"
              style={{ opacity: 0, transition: 'opacity 300ms linear' }}
            >
              <CopyButton text={codeChunk.raw} onCopy={onCopyChunk} />
            </div>
          );
        }
      }
      previousCount = previousCount + lineEls.length;
    });

    // Prevent the default x-axis padding because each line pads itself
    let codeClasses = 'px0 hljs';

    let copyAllButton = null;
    if (props.copyRanges === undefined && props.onCopy) {
      copyAllButton = (
        <div className="absolute z2 top right mr6 mt6 color-white">
          <CopyButton text={props.code} onCopy={props.onCopy} />
        </div>
      );
    }

    let containerClasses = 'relative round z0 scroll-styled';
    if (props.maxHeight !== undefined) containerClasses += ' scroll-auto';

    const containerStyles = {};
    if (props.maxHeight !== undefined)
      containerStyles.maxHeight = props.maxHeight;

    return (
      <div
        className={containerClasses}
        ref={this.onContainerElement}
        style={{ ...containerStyles, backgroundColor: '#f4f7fb' }}
      >
        <pre className="my-neg12 py12 ml-neg12 pl12 mobile-snippet">
          <code className={codeClasses}>{codeElements}</code>
        </pre>
        {copyAllButton}
        {highlightElements}
        {copyElements}
      </div>
    );
  }
}