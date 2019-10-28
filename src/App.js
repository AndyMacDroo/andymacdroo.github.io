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
    return (<div style={isMobile ? { width: '100%', zoom: 0.6 } : { width: '100%' }}>
      <div class="plate noselect">
        <p class="script"><span>Hello, I'm</span></p>
        <p class="shadow text1">ANDY</p>
        <p class="shadow text2"></p>
        <p class="shadow text3">MACDONALD</p>
        <p class="bottom-script"><span>Software Engineer</span></p>
      </div>
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
          <div style={{ position: 'relative', marginTop: `${isMobile ? '25%' : '10%'}`, height: 'auto' }}>
            <TechSkills />
            <Zoom in={this.state.scrollPosition < 0.70}>
              <div>
                <SectionImage />
                {this.getIntroText()}
              </div>
            </Zoom>
            <Divider />
            <div style={{ marginTop: '20px' }}></div>
            <Button onClick={this.displayConfetti} style={{ height: '40px', textTransform: 'none', minWidth: '180px', margin: '2px', color: 'white', background: '#F44336' }} variant="outlined" href="mailto:hello@andymacdonald.dev">
              <i class="fa fa-envelope"></i> <p className="buttonText">{this.state.contactText}</p>
              <Confetti active={this.state.displayConfetti} />
            </Button>
            <Button style={{ height: '40px', textTransform: 'none', minWidth: '180px', margin: '2px', color: 'white', background: 'black' }} variant="outlined" target="_blank" href="https://github.com/AndyMacDroo">
              <i class="fab fa-github"></i><p className="buttonText">@AndyMacDroo</p>

            </Button>
            <Button style={{ height: '40px', textTransform: 'none', minWidth: '180px', margin: '2px', color: 'black !important', background: 'white' }} variant="outlined" target="_blank" href="https://medium.com/@AndyMacDroo">
              <i class="fab fa-medium"></i><p className="buttonText">@AndyMacDroo</p>
            </Button>
            <div style={{ position: 'relative', fontSize: '38px', marginTop: isMobile ? '20px' : '50px' }}>
              {!isMobile && <Zoom in>
                <div style={{ width: '100%' }} className="chevron" onClick={() => this.scrollToMyRef()}>
                  <SectionTitle titleText={this.state.scrollPosition < 0.20 ? "WHAT PEOPLE SAY ABOUT ME" : ""} titleFontSize="16px" />
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
