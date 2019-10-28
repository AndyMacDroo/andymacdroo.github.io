/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class SocialLinks extends React.Component {

  render() {
    const { shouldShow, socialLinks, color } = this.props;
    return (
      <div style={{ marginLeft: 'auto', position: 'relative'}} >
        {shouldShow && <div>
          <div class="icons-social">
            {
              socialLinks.map((value) => {
                return <a target="_blank" style={{ color }} href={value.url}><i class={value.fontAwesomeIcon}></i></a>
              })
            }
          </div>
        </div>}
      </div>);
  }
}

SocialLinks.defaultProps = {
  shouldShow: true,
  color: 'black',
  socialLinks: [
    {
      url: "https://github.com/AndyMacDroo",
      fontAwesomeIcon: 'fab fa-github'
    },
    {
      url: "https://www.linkedin.com/in/andy-macdonald-a7001b53/",
      fontAwesomeIcon: 'fab fa-linkedin'
    },
    {
      url: "https://twitter.com/AndyMacDroo",
      fontAwesomeIcon: 'fab fa-twitter'
    },
    {
      url: "mailto:hello@AndyMacdonald.dev",
      fontAwesomeIcon: 'fa fa-envelope'
    },
    {
      url: "https://medium.com/@AndyMacDroo",
      fontAwesomeIcon: 'fab fa-medium'
    }
  ]
}

SocialLinks.propTypes = {
  shouldShow: PropTypes.bool,
  color: PropTypes.string,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    fontAwesomeIcon: PropTypes.string
  }))
}

export default SocialLinks;
