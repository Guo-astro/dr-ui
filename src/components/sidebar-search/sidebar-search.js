import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import Fuse from 'fuse.js';
import classnames from 'classnames';
import * as Sentry from '@sentry/browser';
import { routeTo } from '@mapbox/batfish/modules/route-to';

export default class SidebarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '', results: [] };
  }

  // set filter as user types
  handleQuery = (value) => {
    this.setState({ filter: value }, () => {
      this.handleSearch();
    });
  };

  // perform search and return results
  handleSearch = () => {
    const fuse = new Fuse(this.props.items, {
      keys: this.props.keys, // keys to perform search on
      threshold: 0.3 // slightly stricter
    });
    this.setState({
      results: fuse.search(this.state.filter)
        ? fuse.search(this.state.filter).map((result) => result.item)
        : []
    });
  };

  // perform these functions when the users selects a menu item
  handleResultClick = (selection) => {
    try {
      // track click so we can guage usage of this feature
      if (window && window.analytics) {
        analytics.track('Clicked link from @mapbox/dr-ui/sidebar-search', {
          query: this.state.filter,
          clicked: selection.url
        });
      }
      // open selection in current window
      routeTo(selection.url);
      // clear search
      this.setState({ filter: '' });
    } catch (err) {
      Sentry.setContext('selection', selection);
      Sentry.captureException(err);
    }
  };

  render() {
    const { results, filter } = this.state;
    const { title, themeWrapper } = this.props;
    return (
      <Downshift
        id="api-reference-search"
        inputValue={filter}
        onChange={(selection) => this.handleResultClick(selection)}
        onInputValueChange={this.handleQuery}
        itemToString={() => filter}
      >
        {(downshiftProps) => {
          const {
            getInputProps,
            isOpen,
            getItemProps,
            openMenu,
            getLabelProps
          } = downshiftProps;

          return (
            <div className={themeWrapper}>
              <div className="relative">
                <Input
                  getInputProps={getInputProps}
                  openMenu={openMenu}
                  getLabelProps={getLabelProps}
                  title={title}
                />
                {isOpen && filter && (
                  <Results
                    results={results}
                    getItemProps={getItemProps}
                    downshiftProps={downshiftProps}
                  />
                )}
              </div>
            </div>
          );
        }}
      </Downshift>
    );
  }
}

SidebarSearch.default = {
  title: 'Search',
  keys: ['title'],
  themeWrapper: 'none block-mm'
};

SidebarSearch.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  keys: PropTypes.array.isRequired,
  title: PropTypes.string,
  themeWrapper: PropTypes.string
};

class Input extends React.Component {
  render() {
    const { getLabelProps, getInputProps, openMenu, title } = this.props;
    return (
      <React.Fragment>
        <label className="hide-visually" {...getLabelProps()}>
          {title}
        </label>
        <input
          placeholder={title}
          className="input bg-white"
          {...getInputProps({
            onFocus: () => openMenu()
          })}
        />
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  getLabelProps: PropTypes.func.isRequired,
  getInputProps: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

class Results extends React.Component {
  render() {
    const { results, getItemProps, downshiftProps } = this.props;
    return (
      <div className="shadow-darken25 round mt3 bg-white scroll-auto scroll-styled hmax180 absolute z4 w-full align-l py6">
        {results.length > 0 ? (
          results.map((result, index) => (
            <Result
              getItemProps={getItemProps}
              index={index}
              result={result}
              key={index}
              downshiftProps={downshiftProps}
            />
          ))
        ) : (
          <div className="px12 py6 txt-s">No results</div>
        )}
      </div>
    );
  }
}
Results.propTypes = {
  getItemProps: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  downshiftProps: PropTypes.shape({
    highlightedIndex: PropTypes.number
  })
};

class Result extends React.Component {
  render() {
    const { result, getItemProps, index } = this.props;
    const { title } = result;
    return (
      <div
        {...getItemProps({
          key: index,
          item: result,
          className: classnames(
            'py6 px12 txt-s link--gray cursor-pointer txt-break-word',
            {
              'bg-gray-faint':
                this.props.downshiftProps.highlightedIndex === this.props.index
            }
          )
        })}
      >
        {title}
      </div>
    );
  }
}

Result.propTypes = {
  getItemProps: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  result: PropTypes.object.isRequired,
  downshiftProps: PropTypes.shape({
    highlightedIndex: PropTypes.number
  })
};
