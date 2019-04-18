import React from 'react';
import PropTypes from 'prop-types';

export default class DownloadImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <div
        style={{
          padding: '5px',
          width: `${props.size}px`,
          height: `${props.size}px`
        }}
      >
        <div className="bg-green-light px3 round-full">
          <svg viewBox="0 0 18 18" className="color-green-dark">
            <title>download</title>
            <path
              style={{ fill: 'currentColor' }}
              d="M8.1,14.6l-3.9-3.8c-0.4-0.4-0.4-1.1,0-1.4c0.4-0.4,1-0.4,1.4,0L8,11.6V4c0-0.5,0.5-1,1-1s1,0.5,1,1v7.6l2.3-2.3
  c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-3.9,3.8C9.6,14.8,9.3,15,9,15S8.4,14.8,8.1,14.6L8.1,14.6z"
            />
          </svg>
        </div>
      </div>
    );
  }
}

DownloadImage.propTypes = {
  size: PropTypes.string.isRequired
};
