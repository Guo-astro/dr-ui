import React from 'react';
import PropTypes from 'prop-types';
import { scopeAppropriateImage } from '@mapbox/appropriate-images-react';
import classnames from 'classnames';

export default class Image extends React.Component {
  render() {
    const { props } = this;
    const AppropriateImage = scopeAppropriateImage(props.config, {
      transformUrl: url => `${props.path}${url}`,
      hiResRatio: 1.5
    });
    const optimize = this.props.optimize
      ? {
          loading: 'lazy',
          height: props.height,
          style: {
            width: props.width
          }
        }
      : undefined;

    const classes = classnames(props.classes, {
      round: props.round,
      'shadow-darken10': props.shadow
    });
    return (
      <div
        className={
          props.theme === 'border' ? 'py24 px24 bg-gray-faint  round' : ''
        }
      >
        <AppropriateImage
          width="100%"
          {...optimize}
          imageId={props.imageId}
          class={classes}
          alt={props.alt}
        />
        {props.caption && (
          <div className="mt12" style={{ color: '#557292' }}>
            {props.caption}
          </div>
        )}
      </div>
    );
  }
}

Image.defaultProps = {
  width: '100%',
  height: 'auto',
  optimize: true,
  round: true,
  shadow: true
};

Image.propTypes = {
  imageId: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  optimize: PropTypes.bool,
  round: PropTypes.bool,
  width: PropTypes.string,
  classes: PropTypes.string,
  height: PropTypes.string,
  theme: PropTypes.string,
  caption: PropTypes.string,
  shadow: PropTypes.bool
};
