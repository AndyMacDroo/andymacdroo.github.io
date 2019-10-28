/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Grid, Card, Avatar, CardContent, CardActions } from '@material-ui/core';
import SectionTitle from './SectionTitle';

class Recommendations extends React.Component {

  getRecommendationsTitle() {
    return (<div style={{ display: 'flex', position: 'relative' }}>
      <i style={{ marginTop: '12px', color: 'white', fontSize: '20px' }} class="fab fa-linkedin"></i>
      <SectionTitle titleText="RECOMMENDATIONS" titleFontSize="20px" />
    </div>);
  }

  render() {
    const { recommendations } = this.props;
    return (
      <div>
        {this.getRecommendationsTitle()}
        <Grid container
          style={{ flexGrow: 1 }}
          direction="row"
          justify="space-between"
          alignItems="center">
          {
            recommendations.map((recommendation) => {
              return (<Grid item md={6} xs={12} lg={4} spacing={3}>
                <Card className="card-recommendation noselect">
                  <CardContent style={{ minHeight: '140px' }}>
                    <div style={{ fontSize: '25px', fontWeight: 300, display: 'flex' }}>
                      <i><i className="big-quote">"</i>{recommendation.extractMessage}<i className="big-quote">"</i></i>
                    </div>
                  </CardContent>
                  <CardActions><Avatar src={recommendation.avatarUrl} />
                    <div className="beanie-font" style={{ fontSize: '20px', fontWeight: 600 }}>
                      {recommendation.role}
                    </div>
                  </CardActions>
                </Card>
              </Grid>)
            })
          }
        </Grid>
      </div>);
  }
}

Recommendations.defaultProps = {
  recommendations: [
    {
      role: 'Contract Developer',
      avatarUrl: 'images/craig.jpeg',
      extractMessage: 'Andy has a genuine passion for technology and can speak with authority on all the latest languages, frameworks, etc. He introduced Docker to the World-Check One project in order to containerize the front-end which saved hours, possibly days, of set up time. Andy is a brilliant developer, genuine technologist and thoroughly nice person. I cannot recommend him highly enough.'
    },
    {
      role: 'Senior Business System Analyst',
      avatarUrl: 'images/amalina.jpeg',
      extractMessage: 'He has been the person who guided me and other new members of the team getting up to speed demonstrating amazing leadership skills from the start. Andy\'s ability to handle heavy workload and the ability to produce high quality output from all the projects was unlike any I\'ve seen before.'
    },
    {
      role: 'Senior Software Engineer',
      avatarUrl: 'images/emma.jpeg',
      extractMessage: 'Andrew is passionate about technology and quality of products going into production; always strives to improve code and processes by showing the way. He is always willing to help everyone and is a true team player. He is also a great mentor and always willing to support others so we can achieve together. Honestly glad I got to work with Andrew.'
    },
    {
      role: 'Senior Software Engineer',
      avatarUrl: 'images/pavithra.jpeg',
      extractMessage: 'He is an unparalleled combination of exceptional technically as a developer, mentor, leader and extremely humble n supportive at the same time. He will be a great asset to any company he chooses to be with.'
    },
    {
      role: 'Scrum Master',
      avatarUrl: 'images/paul.jpeg',
      extractMessage: 'Andrew came into the business as a junior, but quickly proved himself to be capable way beyond what he was brought in to do. So, he quickly found himself leading a Scrum team, a central member of the Development Leadership Team, and a major contributor to many important projects and initiatives. For me, what really impressed me about Andrew was his natural ability to lead and mentor his team members.'
    },
    {
      role: 'Head of Product',
      avatarUrl: 'images/marc.jpeg',
      extractMessage: 'Andrew I took ownership of a project that was failing and quickly turned it around. Andrew is a full stack developer for which he is technically very strong. However, for me, his real strengths include solving very complex problems and being passionate about the user, frequently working above and beyond to ensure that real value has been delivered.'
    },
    {
      role: 'Data Analyst',
      avatarUrl: 'images/paul-2.jpeg',
      extractMessage: 'I worked with Andy on a number of complex issues during the time we worked together. The one thing that was always apparent was how knowledgeable he is and how commited he is to find the best solution as quickly as possible. We always managed to have fun whilst working together too which is hard to find in many workplaces.'
    },
    {
      role: 'Junior Software Engineer',
      avatarUrl: 'images/lewis.jpeg',
      extractMessage: 'His ability to manage a team is almost flawless, I\'d consider him more a leader than a boss or manager. He was always on hand to bounce ideas of, to help with code related issues or just simply for a chat if things were getting the better of you.'
    }

  ]
}

Recommendations.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.shape({
    avatarUrl: PropTypes.string,
    role: PropTypes.string,
    message: PropTypes.string,
  }))
}

export default Recommendations;
