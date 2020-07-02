/*
Basic.
*/
import React from 'react';
import PageShell from '../page-shell';

export default class Basic extends React.Component {
  render() {
    return (
      <PageShell
        constants={{
          SITE: 'dr-ui',
          BASEURL: '/dr-ui',
          FORWARD_EVENT_WEBHOOK: { production: 'prod', staging: 'staging' }
        }}
        navigation={{
          accordion: {
            '/dr-ui/overview/': [
              {
                path: '/dr-ui/overview/',
                title: 'Overview'
              },
              {
                path: '/dr-ui/overview/layouts/',
                title: 'Layouts'
              },
              {
                path: '/dr-ui/overview/navigation/',
                title: 'Navigation'
              },
              {
                path: '/dr-ui/overview/images/',
                title: 'Images and videos'
              },
              {
                path: '/dr-ui/overview/constants/',
                title: 'Constants'
              },
              {
                path: '/dr-ui/overview/frontmatter/',
                tag: 'fundamentals',
                title: 'Frontmatter'
              }
            ]
          },
          hierarchy: {
            '/dr-ui/demo/': {
              parent: '/dr-ui/demo/',
              title: 'Demo'
            },
            '/dr-ui/examples/': {
              parent: '/dr-ui/examples/',
              title: 'Examples'
            },
            '/dr-ui/examples/example-1/': {
              parent: '/dr-ui/examples/',
              title: 'Examples'
            },
            '/dr-ui/examples/example-2/': {
              parent: '/dr-ui/examples/',
              title: 'Examples'
            },
            '/dr-ui/examples/example-3/': {
              parent: '/dr-ui/examples/',
              title: 'Examples'
            },
            '/dr-ui/overview/': {
              parent: '/dr-ui/overview/',
              title: 'Overview'
            },
            '/dr-ui/overview/constants/': {
              parent: '/dr-ui/overview/',
              title: 'Overview'
            },
            '/dr-ui/overview/frontmatter/': {
              parent: '/dr-ui/overview/',
              title: 'Overview'
            },
            '/dr-ui/overview/images/': {
              parent: '/dr-ui/overview/',
              title: 'Overview'
            },
            '/dr-ui/overview/layouts/': {
              parent: '/dr-ui/overview/',
              title: 'Overview'
            },
            '/dr-ui/overview/navigation/': {
              parent: '/dr-ui/overview/',
              title: 'Overview'
            },
            '/dr-ui/specification/': {
              parent: '/dr-ui/specification/',
              title: 'Specification'
            }
          },
          navTabs: [
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
          ]
        }}
        location={{ pathname: '/dr-ui/' }}
        frontMatter={{ title: 'My page', description: 'my description' }}
      >
        hello world!
      </PageShell>
    );
  }
}
