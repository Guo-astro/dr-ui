/*
Basic.
*/
import React from 'react';
import TabList from '../tab-list';

export default class Basic extends React.Component {
  render() {
    return (
      <TabList
        items={[
          {
            href: '/dr-ui/overview/',
            id: '/dr-ui/overview/',
            label: 'Overview'
          },
          {
            href: '/dr-ui/specification/',
            id: '/dr-ui/specification/',
            label: 'Specification'
          },
          {
            href: '/dr-ui/examples/',
            id: '/dr-ui/examples/',
            label: 'Examples'
          },
          {
            href: '/dr-ui/demo/',
            id: '/dr-ui/demo/',
            label: 'Demo'
          }
        ]}
      />
    );
  }
}
