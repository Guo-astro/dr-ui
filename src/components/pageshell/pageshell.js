import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import Topbar from './topbar';
import PageLayout from '../page-layout/index.js';
import {
  buildMeta,
  findHasSection,
  findParentPath
} from '../page-layout/utils';

export default class PageShell extends React.Component {
  componentDidMount() {
    // initialize analytics
    if (window && window.initializeMapboxAnalytics) {
      window.initializeMapboxAnalytics();
    }
    Sentry.init({
      dsn: 'https://6ba8cfeeedad4fb7acb8576f0fd6e266@sentry.io/1384508'
    });
  }

  render() {
    const {
      location,
      children,
      frontMatter,
      navigation,
      topics,
      constants
    } = this.props;
    const { hideFeedback, layout } = this.props.frontMatter;

    // determine's if this is a single or multli-level site (the latter has sections)
    const hasSection = findHasSection(navigation, location.pathname);
    // get the parent's path, we need this for the top nav
    const parentPath = findParentPath(navigation, location.pathname);
    // if page has `section` then switch to multi-page
    const switchedNavigation = hasSection
      ? navigation[hasSection.path]
      : navigation;

    // page metadata to send to ReactPageShell
    const meta = buildMeta(frontMatter, location.pathname, navigation);

    return (
      <React.Fragment>
        <Helmet>
          <link
            rel="canonical"
            href={`https://docs.mapbox.com${meta.pathname}`}
          />
        </Helmet>
        <div className="shell-header-buffer" />
        <Topbar
          constants={constants}
          navigation={switchedNavigation}
          parentPath={parentPath}
        />
        <PageLayout
          parentPath={parentPath}
          navigation={switchedNavigation}
          layout={layout}
          meta={meta}
          frontMatter={frontMatter}
          location={location}
          topics={topics}
          feedback={{
            site: constants.SITE,
            webhook: constants.FORWARD_EVENT_WEBHOOK,
            hideFeedback,
            hasSection
          }}
        >
          {children}
        </PageLayout>
      </React.Fragment>
    );
  }
}

PageShell.propTypes = {
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contentType: PropTypes.string,
    language: PropTypes.array,
    level: PropTypes.number,
    headings: PropTypes.array,
    layout: PropTypes.string,
    hideFeedback: PropTypes.bool
  }).isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
    navTabs: PropTypes.array,
    path: PropTypes.string,
    accordion: PropTypes.object
  }).isRequired,
  topics: PropTypes.object.isRequired,
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired,
    FORWARD_EVENT_WEBHOOK: PropTypes.shape({
      production: PropTypes.string.isRequired,
      staging: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
