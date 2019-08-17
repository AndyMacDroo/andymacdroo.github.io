import React from 'react';
import '../App.css';
import MaterialUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import SocialLinks from './SocialLinks';
import { Zoom } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

class AppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    this.setState({
      scrollPosition: scrolled,
    })
    console.log(scrolled);
  }

  render() {
    return (
      <div>
        {this.props.shouldShow && <MaterialUIAppBar elevation="elevation0" position="fixed" color="default"
          style={{ backgroundColor: 'transparent', color: '#4e4e4e' }}>
          <Toolbar>
            <Zoom in={this.state.scrollPosition < 0.10 || (isMobile && this.state.scrollPosition < 0.001)}>
              <div style={{ marginLeft: 'auto', display: 'flex' }}>
                <SocialLinks />
              </div>
            </Zoom>
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
