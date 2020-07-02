import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './content';
import Sidebar from './sidebar';

export default class PageLayout extends React.Component {
  render() {
    const { sidebarTheme, layout } = this.props;
    return (
      <div className="limiter">
        <div className="grid">
          {layout !== 'full' && (
            <div className={`col col--4-mm col--12 ${sidebarTheme}`}>
              <Sidebar {...this.props} />
            </div>
          )}
          <div
            className={classnames('col col--12', {
              'col--8-mm': layout !== 'full'
            })}
          >
            <Content {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

PageLayout.propTypes = {
  layout: PropTypes.oneOf(['page', 'accordion', 'example', 'full']),
  children: PropTypes.node,
  frontMatter: PropTypes.shape({
    hideFeedback: PropTypes.bool
  }).isRequired,
  location: PropTypes.object.isRequired,
  sidebarTheme: PropTypes.string,
  parentPath: PropTypes.string,
  feedback: PropTypes.shape({
    site: PropTypes.string.isRequired,
    webhook: PropTypes.object.isRequired,
    section: PropTypes.string
  }).isRequired,
  navigation: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
    navTabs: PropTypes.array,
    path: PropTypes.string,
    accordion: PropTypes.object
  }).isRequired,
  AppropriateImage: PropTypes.func
};

PageLayout.defaultProps = {
  sidebarTheme: 'bg-gray-faint',
  layout: 'page'
};
