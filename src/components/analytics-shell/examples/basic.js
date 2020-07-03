/*
Basic.
*/
import React from 'react';
import AnalyticsShell from '../analytics-shell';

export default class Basic extends React.Component {
  render() {
    return (
      <AnalyticsShell location={{ pathname: '/dr-ui/' }}>
        hello world!
      </AnalyticsShell>
    );
  }
}
