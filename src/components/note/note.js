import React from 'react';
import PropTypes from 'prop-types';
import BookImage from '../book-image/book-image';
import WarningImage from '../warning-image/warning-image';
import DownloadImage from '../download-image/download-image';

class Note extends React.Component {
  render() {
    const { props } = this;
    let titleText = 'Note';
    const themes = {
      base: {
        // applied to every note
        padding: '18px',
        fontSize: '13px',
        lineHeight: '20px',
        borderRadius: '4px'
      },
      default: {
        style: {
          background: '#f1faff',
          color: '#587594'
        },
        image: <BookImage size="60" />
      },
      warning: {
        style: {
          background: '#feefe2',
          color: '#945823'
        },
        image: <WarningImage color="orange" size="60" />
      },
      error: {
        style: {
          background: '#fbe5e5',
          color: '#ba3b3f'
        },
        image: <WarningImage color="red" size="60" />
      },
      download: {
        style: {
          background: '#e8f5ee',
          color: '#269561'
        },
        image: <DownloadImage size="60" />
      }
    };

    if (props.title) {
      titleText = props.title;
    }

    let colorTheme = {};
    if (props.customTheme) {
      colorTheme = props.customTheme;
    } else if (props.theme) {
      colorTheme = themes[props.theme].style;
    } else {
      colorTheme = themes['default'].style;
    }

    const themeNote = Object.assign(themes['base'], colorTheme);

    let image = <div />;
    if (props.imageComponent) {
      colorTheme = image.imageComponent;
    } else if (props.theme) {
      image = themes[props.theme].image;
    } else {
      image = themes['default'].image;
    }

    return (
      <div className="flex-parent flex-parent--row mb18" style={themeNote}>
        <div className="flex-child mr12">{image}</div>
        <div className="flex-child">
          <div className="txt-bold txt-m mb6">{titleText}</div>
          {props.children}
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['warning', 'error', 'download']),
  customTheme: PropTypes.shape({
    color: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
  }),
  imageComponent: PropTypes.node
};

export default Note;
