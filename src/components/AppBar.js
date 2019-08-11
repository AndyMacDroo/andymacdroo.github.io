import React from 'react';
import '../App.css';
import MaterialUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import SectionImage from './SectionImage';
import SocialLinks from './SocialLinks';
import SectionTitle from './SectionTitle';

class AppBar extends React.Component {

  render() {
    return (
      <div>
        {this.props.shouldShow && <MaterialUIAppBar elevation="elevation0" position="sticky" color="default" 
        style={{ backgroundColor: 'white', color: '#4e4e4e' }}>
          <Toolbar>
            <SectionImage imageHeight={90} />
            <SectionTitle titleFontSize={30} />
            <SocialLinks />
          </Toolbar>
        </MaterialUIAppBar>
        }
      </div>);
  }
}

AppBar.defaultProps = {
  shouldShow: true
}

AppBar.propTypes = {
  shouldShow: PropTypes.bool
}

export default AppBar;
