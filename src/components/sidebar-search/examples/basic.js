/*
Basic with custom handleClick function.
*/
import React from 'react';
import SidebarSearch from '../sidebar-search';
import categories from '../../../../docs/src/categories.json';

const items = Object.keys(categories).reduce((arr, category) => {
  const components = categories[category].map((comp) => ({
    title: comp,
    category,
    url: `https://mapbox.github.io/dr-ui/#${comp.toLowerCase()}`
  }));
  arr = arr.concat(components);
  return arr;
}, []);

export default class Basic extends React.Component {
  render() {
    return (
      <SidebarSearch
        items={items}
        title="Search dr-ui components"
        handleClick={(selection) => {
          console.log(selection.url);
          window.open(selection.url, '_self');
        }}
        keys={['title', 'category']}
      />
    );
  }
}
