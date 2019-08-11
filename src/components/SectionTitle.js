/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class SectionTitle extends React.Component {

  render() {
    const { shouldShow, titleText, titleFontSize } = this.props;
    return (
      <div>
        {shouldShow &&
          <div style={{ fontSize: titleFontSize, textAlign: 'center' }} className="titleText">
            {titleText}
          </div>}
      </div>);
  }
}

SectionTitle.defaultProps = {
  shouldShow: true,
  titleText: "👋 Hey, I'm Andy Macdonald.",
  titleFontSize: '1.75em'
}

SectionTitle.propTypes = {
  shouldShow: PropTypes.bool,
  titleText: PropTypes.string,
  titleFontSize: PropTypes.string
}

export default SectionTitle;
