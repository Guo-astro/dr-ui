/*
Basic.
*/
import React from 'react';
import SidebarSearch from '../sidebar-search';

export default class Basic extends React.Component {
  render() {
    return (
      <SidebarSearch
        items={[
          {
            title: "Old Man's War",
            url: '#',
            author: {
              firstName: 'John',
              lastName: 'Scalzi'
            }
          },
          {
            title: 'The Lock Artist',
            url: '#',
            author: {
              firstName: 'Steve',
              lastName: 'Hamilton'
            }
          }
        ]}
        title="Search my library of rare books"
        keys={['title', 'author.firstName']}
      />
    );
  }
}
