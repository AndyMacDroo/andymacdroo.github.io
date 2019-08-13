import React from 'react';

import { storiesOf } from '@storybook/react';

import TechSkills from '../components/TechSkills';
import SocialLinks from '../components/SocialLinks';
import SectionImage from '../components/SectionImage';
import SectionTitle from '../components/SectionTitle';
import GenericAppPage from '../pages/GenericAppPage';
import { Button, ButtonGroup, Divider } from '@material-ui/core';
import App from '../App';


storiesOf('SectionImage', module)
    .add('renders', () => <SectionImage />);

storiesOf('IntroTitle', module)
    .add('renders', () => <SectionTitle />);

storiesOf('SocialLinks', module)
    .add('renders', () => <SocialLinks />);

storiesOf('TechSkills', module)
    .add('renders', () => <TechSkills />);

storiesOf('GenericAppPage', module)
    .add('rendersWithChildren', () =>
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
        </GenericAppPage>)

storiesOf('App', module)
    .add('renders', () => <App />);