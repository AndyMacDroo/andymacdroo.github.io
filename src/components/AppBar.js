import React from 'react';
import '../App.css';
import MaterialUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import SocialLinks from './SocialLinks';

class AppBar extends React.Component {

  render() {
    return (
      <div>
        {this.props.shouldShow && <MaterialUIAppBar elevation="elevation0" position="sticky" color="default"
          style={{ backgroundColor: 'transparent', color: '#4e4e4e' }}>
          <Toolbar>
            <div style={{ marginLeft: 'auto', display: 'flex' }}>
              <SocialLinks />
            </div>

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
