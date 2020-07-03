import React from 'react';
import components from './data/components'; // eslint-disable-line
import ComponentSection from './components/component-section';
import OverviewHeader from '../../src/components/overview-header';
import Note from '../../src/components/note';
import PageLayout from '../../src/components/page-layout';
import categories from './categories.json';
import navigation from '@mapbox/batfish/data/navigation'; // eslint-disable-line
import constants from './constants';

const slug = (string) => string.toLowerCase();

const version = require('../../package.json').version;

const topics = {
  '/dr-ui/': {
    topics: Object.keys(categories).map((category) => ({
      name: category,
      url: `#${slug(category)}`,
      id: `${slug(category)}`,
      pages: categories[category].map((item) => ({
        text: item,
        url: `#${slug(item)}`
      }))
    }))
  }
};

export default class App extends React.Component {
  componentDidMount() {
    // override SectionedNavigation scroll
    const sideBar = document.getElementById('dr-ui--page-layout-sidebar');
    if (!sideBar) return;
    sideBar.scrollTop = 0;
  }
  render() {
    const componentEls = Object.keys(categories).map((category) => {
      return (
        <div key={category}>
          <h2 className="txt-fancy txt-h3" id={category.toLowerCase()}>
            {category}
          </h2>
          {categories[category].sort().map((comp) => {
            const component = components.filter((f) => f.name === comp)[0];
            return (
              <div
                key={component.name}
                className="pt30 mb30 border-t border--darken10"
              >
                <ComponentSection data={component} />
              </div>
            );
          })}
        </div>
      );
    });
    return (
      <PageLayout
        topBarSticker={false}
        parentPath="/dr-ui/"
        topics={topics}
        frontMatter={this.props.frontMatter}
        location={this.props.location}
        constants={constants}
        navigation={navigation}
      >
        <div className="prose">
          <OverviewHeader
            features={[
              'React components',
              'Support for IE11 and all modern browsers'
            ]}
            image={<div />}
            title="Dr. UI"
            version={version}
            changelogLink="https://github.com/mapbox/dr-ui/blob/master/CHANGELOG.md"
            installLink="https://github.com/mapbox/dr-ui/blob/master/README.md"
            ghLink="https://github.com/mapbox/dr-ui"
          />

          <p>
            Pronounced "Doctor UI". <strong>D</strong>ocumentation{' '}
            <strong>R</strong>eact <strong>UI</strong> components.{' '}
            <a href="https://mapbox.github.io/mr-ui/">See @mapbox/mr-ui</a>.
          </p>

          <p>UI components for Mapbox documentation projects.</p>

          <Note>
            <p>
              This project is for internal Mapbox usage. The code is open source
              and we appreciate bug reports; but we will only consider feature
              requests and pull requests from Mapbox developers.
            </p>
          </Note>
        </div>
        {componentEls}
      </PageLayout>
    );
  }
}
