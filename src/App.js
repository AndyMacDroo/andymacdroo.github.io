import React from 'react';
import './App.css';
import TechSkills from './components/TechSkills';
import SectionImage from './components/SectionImage';
import SectionTitle from './components/SectionTitle';
import GenericAppPage from './pages/GenericAppPage';
import { Button, ButtonGroup, Divider } from '@material-ui/core';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <GenericAppPage>
          <div style={{ position: 'relative' }}>
            <TechSkills />
            <SectionImage />
            <SectionTitle titleFontSize="30px" />
            <SectionTitle titleText="Full Stack Software Engineer" />
            <Divider />
            <ButtonGroup size="small">
              <Button style={{ height: '40px' }} variant="outlined" href="mailto:hello@andymacdonald.dev">
                <i class="fa fa-envelope"></i>
                <SectionTitle titleText="Contact Me" titleFontSize="12px" />
              </Button>
              <Button style={{ height: '40px' }} variant="outlined" target="_blank" href="https://github.com/AndyMacDroo">
                <i class="fab fa-github"></i>
                <SectionTitle titleText="My Github" titleFontSize="12px" />
              </Button>
            </ButtonGroup>
          </div>
        </GenericAppPage>
      </div>
    );
  }
}

export default App;
