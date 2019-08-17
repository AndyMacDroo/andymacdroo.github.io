import React from 'react';
import './App.css';
import TechSkills from './components/TechSkills';
import SectionImage from './components/SectionImage';
import SectionTitle from './components/SectionTitle';
import GenericAppPage from './pages/GenericAppPage';
import Confetti from 'react-dom-confetti';
import { Button, Divider } from '@material-ui/core';
import { Zoom } from '@material-ui/core';
import Recommendations from './components/Recommendations';
import { isMobile } from 'react-device-detect';
import ReactGA from 'react-ga';

const contactMeText = 'Contact Me';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
      contactText: contactMeText,
      displayConfetti: false
    }
    ReactGA.initialize('UA-145826557-1');
  }

  getScrollPosition = () => {
    return isMobile ? 480 : 2000
  }

  scrollToMyRef = () => window.scrollTo({
    top: this.state.scrollPosition < 0.18 ? this.getScrollPosition() : 1,
    behavior: 'smooth'
  })

  displayConfetti = () => {
    this.setState({
      displayConfetti: !this.state.displayConfetti
    })
  }

  getIntroText = () => {
    if (isMobile) {
      return <div className="titleText" style={{ position: 'relative' }}>
        <b style={{ color: 'white' }}>Andy Macdonald</b>
        <SectionTitle titleText="Full Stack Software Engineer" titleFontSize="16px" />
      </div>
    }
    return (<div style={{ width: '100%' }}>
      <div style={{ position: 'relative', fontWeight: 300, marginBottom: '-11px', userSelect: 'none' }}
        className="titleText">Hey, I'm <b style={{ color: 'white' }}>Andy Macdonald</b></div>
      <SectionTitle titleText="Full Stack Software Engineer" />
    </div>)
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
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="App">
        <GenericAppPage>
          <div style={{ position: 'relative', marginTop: '20%', height: 'auto' }}>
            <TechSkills />
            <Zoom in={this.state.scrollPosition < 0.70}>
              <div>
                <SectionImage />
                {this.getIntroText()}
              </div>
            </Zoom>
            <Divider />
            <Button onClick={this.displayConfetti} style={{ height: '40px', textTransform: 'none', minWidth: '180px', margin: '2px' }} variant="outlined" href="mailto:hello@andymacdonald.dev">
              <i class="fa fa-envelope"></i> <p className="buttonText">{this.state.contactText}</p>
              <Confetti active={this.state.displayConfetti} />
            </Button>
            <Button style={{ height: '40px', textTransform: 'none', minWidth: '180px', margin: '2px' }} variant="outlined" target="_blank" href="https://github.com/AndyMacDroo">
              <i class="fab fa-github"></i><p className="buttonText">@AndyMacDroo</p>

            </Button>
            <Button style={{ height: '40px', textTransform: 'none', minWidth: '180px', margin: '2px' }} variant="outlined" target="_blank" href="https://medium.com/@AndyMacDroo">
              <i class="fab fa-medium"></i><p className="buttonText">@AndyMacDroo</p>
            </Button>
            <div style={{ position: 'relative', fontSize: '38px', marginTop: isMobile ? '20px' : '70px' }}>
              {!isMobile && <Zoom in>
                <div style={{ width: '100%' }} className="chevron" onClick={() => this.scrollToMyRef()}>
                  <SectionTitle titleText={this.state.scrollPosition < 0.20 ? "What people say about me" : ""} titleFontSize="16px" />
                  <i className={this.state.scrollPosition < 0.20 ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
                </div>
              </Zoom>
              }
            </div>
            <div style={{ marginLeft: '-30px' }}>
              <Zoom in={this.state.scrollPosition > 0.10 || (isMobile && this.state.scrollPosition > 0.03)}>
                <div style={{ position: 'relative', marginTop: isMobile ? '30px' : '0px', marginLeft: '30px' }}>
                  <Recommendations />
                </div>
              </Zoom>
            </div>
          </div>
        </GenericAppPage>
      </div>
    );
  }
}

export default App;
