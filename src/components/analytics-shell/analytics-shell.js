import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

const environment =
  typeof window !== 'undefined'
    ? /(^|\S+\.)mapbox\.com/.test(window.location.host)
      ? 'production'
      : 'staging'
    : undefined;

export default class AnalyticsShell extends React.Component {
  componentDidMount() {
    // initialize analytics
    if (window && window.initializeMapboxAnalytics) {
      window.initializeMapboxAnalytics({
        ...this.props.mapboxSettings
      });
    }
    // initialize Sentry
    Sentry.init({
      ...this.props.sentrySettings,
      environment
    });
  }

  render() {
    const { location, children } = this.props;
    return (
      <div>
        <Helmet>
          <link
            rel="canonical"
            href={`https://docs.mapbox.com${location.pathname}`}
          />
        </Helmet>
        {children}
      </div>
    );
  }
}

AnalyticsShell.defaultProps = {
  sentrySettings: {
    dsn: 'https://6ba8cfeeedad4fb7acb8576f0fd6e266@sentry.io/1384508'
  },
  mapboxSettings: {}
};

AnalyticsShell.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  sentrySettings: PropTypes.shape({
    dsn: PropTypes.string
  }),
  mapboxSettings: PropTypes.object
};
