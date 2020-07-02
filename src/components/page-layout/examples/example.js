/*
"example" layout.
*/
import React from 'react';
import PageLayout from '../page-layout';

export default class Basic extends React.Component {
  render() {
    return (
      <PageLayout
        feedback={{
          site: 'dr-ui',
          webhook: {
            production: '123',
            staging: '123'
          }
        }}
        location={{
          pathname: '/PageLayout/'
        }}
        parentPath="/PageLayout/"
        frontMatter={{
          title: 'Examples',
          description: 'Lots of handy examples.',
          navOrder: 1
        }}
        layout="example"
        navigation={{}}
        topics={{
          '/PageLayout/': {
            contentType: 'example',
            description: 'Replace me.',
            language: ['JavaScript'],
            layout: 'example',
            navOrder: 3,
            path: '/PageLayout/',
            title: 'Examples',
            topics: [
              {
                count: 3,
                name: 'Cool',
                pages: [
                  {
                    contentType: 'example',
                    description: 'Replace me.',
                    language: ['JavaScript'],
                    layout: 'example',
                    path: '/PageLayout/example-1/',
                    text: 'Example 1',
                    thumbnail: 'header-image',
                    title: 'Example 1',
                    topic: ['Cool'],
                    url: '/PageLayout/example-1/'
                  },
                  {
                    contentType: 'example',
                    description: 'Replace me.',
                    language: ['JavaScript'],
                    layout: 'example',
                    path: '/PageLayout/example-2/',
                    text: 'Example 2',
                    thumbnail: 'header-image',
                    title: 'Example 2',
                    topic: ['Cool'],
                    url: '/PageLayout/example-2/'
                  },
                  {
                    contentType: 'example',
                    description: 'Replace me.',
                    language: ['JavaScript'],
                    layout: 'example',
                    path: '/PageLayout/example-3/',
                    text: 'Example 3',
                    thumbnail: 'header-image',
                    title: 'Example 3',
                    topic: ['Cool', 'Awesome'],
                    url: '/PageLayout/example-3/'
                  }
                ],
                url: '/PageLayout/#cool'
              },
              {
                count: 1,
                name: 'Awesome',
                pages: [
                  {
                    contentType: 'example',
                    description: 'Replace me.',
                    language: ['JavaScript'],
                    layout: 'example',
                    path: '/PageLayout/example-3/',
                    text: 'Example 3',
                    thumbnail: 'header-image',
                    title: 'Example 3',
                    topic: ['Cool', 'Awesome'],
                    url: '/PageLayout/example-3/'
                  }
                ],
                url: '/PageLayout/#awesome'
              }
            ]
          }
        }}
      />
    );
  }
}
