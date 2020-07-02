import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Feedback from '../feedback/feedback';
import LayoutExamples from './layouts/example/content.js';
import { UserContextProvider } from './user-context';

export default class Content extends React.Component {
  renderExamplesIndex = () => {
    const { frontMatter, parentPath, topics, AppropriateImage } = this.props;
    return (
      <LayoutExamples
        topics={topics[parentPath].topics}
        frontMatter={frontMatter}
        sectionPath={parentPath}
        AppropriateImage={AppropriateImage}
      />
    );
  };

  renderFeedback = () => {
    const { frontMatter, location } = this.props;
    const { site, section, webhook } = this.props.feedback;
    return (
      <div className="mt36">
        <Feedback
          type={frontMatter.layout === 'example' ? 'example' : ''}
          site={site}
          location={location}
          section={section}
          webhook={webhook}
        />
      </div>
    );
  };
  render() {
    const { children, layout, frontMatter } = this.props;
    const { hideFeedback } = this.props.frontMatter;

    const isExamplesIndex = layout === 'example' && frontMatter.navOrder;

    return (
      <UserContextProvider>
        <div
          id="docs-content"
          className={classnames('mt24-mm pr0-mm', {
            'mb60 px36-mm': layout !== 'full',
            'px24-mm': layout === 'full'
          })}
        >
          <div className="prose">
            {frontMatter.title !== 'Overview' && (
              <h1 className="txt-fancy">{frontMatter.title}</h1>
            )}
            {children}
            {!isExamplesIndex && !hideFeedback ? this.renderFeedback() : ''}
          </div>
          {isExamplesIndex ? this.renderExamplesIndex() : ''}
        </div>
      </UserContextProvider>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.string.isRequired,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    hideFeedback: PropTypes.bool,
    navOrder: PropTypes.number,
    layout: PropTypes.string
  }).isRequired,
  location: PropTypes.object.isRequired,
  parentPath: PropTypes.string,
  topics: PropTypes.object,
  feedback: PropTypes.shape({
    site: PropTypes.string.isRequired,
    webhook: PropTypes.object.isRequired,
    section: PropTypes.string
  }).isRequired,
  AppropriateImage: PropTypes.func
};
