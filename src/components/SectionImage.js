/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { borderRadius } from 'polished';

class SectionImage extends React.Component {

  render() {
    const { shouldShow, imageHeight, imageSrc } = this.props;
    return (<div className="noselect" style={{ textAlign: 'center', position: 'relative' }} >
        {shouldShow && <div>
          <img src={`${imageSrc}`} alt="section" style={{ height: `${imageHeight}px`, borderRadius: '200px', border: '5px solid white' }} />
        </div>}
      </div>);
  }
}

SectionImage.defaultProps = {
  shouldShow: true,
  imageHeight: 150,
  imageSrc: "images/andy.jpeg"
}

SectionImage.propTypes = {
  shouldShow: PropTypes.bool,
  imageHeight: PropTypes.number,
  imageSrc: PropTypes.string
}

export default SectionImage;
