/*
Basic.
*/
import React from 'react';
import PageShell from '../page-shell';

export default class Basic extends React.Component {
  render() {
    return (
      <PageShell location={{ pathname: '/dr-ui/' }}>hello world!</PageShell>
    );
  }
}
