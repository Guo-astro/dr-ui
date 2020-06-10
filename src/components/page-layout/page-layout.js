import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';
import classnames from 'classnames';

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topValue: 0,
      bottomBoundaryValue: 0,
      stickyEnabled: false
    };
    this.debounceHandleWindowResize = debounce(() => {
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      this.setState({
        topValue:
          width < 640
            ? this.props.sidebarContentStickyTopNarrow
            : this.props.sidebarContentStickyTop
      });
      this.setState({
        bottomBoundaryValue: height - 150
      });
    }, 200);
  }

  componentDidMount() {
    this.debounceHandleWindowResize();
    setTimeout(() => {
      this.setState({ stickyEnabled: true });
    }, 500);
    window.addEventListener('resize', this.debounceHandleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceHandleWindowResize);
  }

  renderTitle = title => {
    return (
      <div className="txt-l color-blue txt-fancy mb12 block-mm none mx24">
        {title}
      </div>
    );
  };

  render() {
    const {
      sidebarTitle,
      sidebarStackedOnNarrowScreens,
      sideBarColSize,
      children,
      sidebarTheme,
      sidebarContent,
      fullSidebarHeight
    } = this.props;
    const { stickyEnabled, bottomBoundaryValue, topValue } = this.state;

    const sidebarNarrowClasses = classnames({
      block: sidebarStackedOnNarrowScreens,
      'none block-mm': !sidebarStackedOnNarrowScreens
    });

    // if available, sets col--#-ml size for the sidebar and content elements. If the value is outside of the range, it will not set the col--#-ml values and defer to the default col sizes
    const adjustedColSize =
      sideBarColSize && sideBarColSize > 2 && sideBarColSize < 7
        ? sideBarColSize
        : null;

    return (
      <div className="grid">
        <div
          className={`col col--4-mm ${
            adjustedColSize ? `col--${adjustedColSize}-ml` : ''
          } col--12 ${sidebarTheme}`}
          data-swiftype-index="false"
        >
          <Sticky
            enabled={stickyEnabled}
            bottomBoundary={bottomBoundaryValue}
            innerZ={3}
            top={topValue}
          >
            <div
              className={classnames(
                `pt12-mm pt0 scroll-auto-mm scroll-styled ${sidebarNarrowClasses}`,
                {
                  'viewport-almost-mm': !fullSidebarHeight,
                  'viewport-mm': fullSidebarHeight
                }
              )}
              id="dr-ui--page-layout-sidebar"
            >
              {sidebarTitle && this.renderTitle(sidebarTitle)}
              {sidebarContent}
            </div>
          </Sticky>
        </div>
        <div
          id="docs-content"
          className={`col col--8-mm ${
            adjustedColSize ? `col--${12 - adjustedColSize}-ml` : ''
          } col--12 mt24-mm mb60 pr0-mm px36-mm`}
        >
          {children}
        </div>
      </div>
    );
  }
}

PageLayout.propTypes = {
  sidebarContent: PropTypes.node.isRequired,
  sidebarTitle: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  sidebarTheme: PropTypes.string,
  sidebarContentStickyTop: PropTypes.number,
  sidebarContentStickyTopNarrow: PropTypes.number,
  sidebarStackedOnNarrowScreens: PropTypes.bool,
  sideBarColSize: PropTypes.number, // accepts numbers 3 - 6 to change the column width of the sidebar at the -ml breakpoint
  children: PropTypes.node.isRequired,
  fullSidebarHeight: PropTypes.bool // if true, set the sidebar to the full width of the document body
};

PageLayout.defaultProps = {
  sidebarTheme: 'bg-gray-faint',
  sidebarStackedOnNarrowScreens: false,
  sidebarContentStickyTop: 60,
  sidebarContentStickyTopNarrow: 0,
  fullSidebarHeight: false
};

export default PageLayout;
