import React from 'react';

import { storiesOf } from '@storybook/react';

import TechSkills from '../components/TechSkills';
import SocialLinks from '../components/SocialLinks';
import SectionImage from '../components/SectionImage';
import SectionTitle from '../components/SectionTitle';
import GenericAppPage from '../pages/GenericAppPage';


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
            <div>
                <SectionTitle titleText={"My Tech Skills"} titleFontSize={40} />
                <TechSkills />
            </div>
        </GenericAppPage>)