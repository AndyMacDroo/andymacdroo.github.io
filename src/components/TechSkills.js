import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import { isMobile } from 'react-device-detect';
import { Zoom } from '@material-ui/core';

class TechSkills extends React.Component {

  render() {
    const { techSkills } = this.props;
    let techSkillsMapped = techSkills.map(skill => ({ src: skill.url, height: 60, width: 60 }));
    return (<Zoom in><Particles
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '200px',
        background: '-webkit-linear-gradient(150deg, #34ADFF 35%, #4CBFFF 35%)',
        opacity: 1
      }}
      params={{
        "particles": {
          "number": {
            "value": techSkillsMapped.length
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "speed": 6,
            "out_mode": "out"
          },
          "shape": {
            "type": [
              "images"
            ],
            "images": techSkillsMapped
          },
          "size": {
            "value": isMobile ? 20 : 35,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 8,
              "size_min": isMobile ? 10 : 30,
              "sync": false
            }
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          },
          "modes": {
            "repulse": {
              "distance": 100,
              "duration": 0
            }
          }
        },
        "retina_detect": false
      }} /></Zoom>);
  }
}

TechSkills.defaultProps = {
  shouldShow: true,
  defaultSize: 80,
  techSkills: [
    {
      url: "images/java.png",
      name: 'Java',
      type: 'Languages'
    },
    {
      url: "images/javascript.png",
      name: 'JavaScript',
      type: 'Languages'
    },
    {
      url: "images/python.png",
      name: 'Python',
      type: 'Languages'
    },
    {
      url: "images/bash.png",
      name: 'BASH',
      type: 'Languages'
    },
    {
      url: "images/csharp.png",
      name: 'C#',
      type: 'Languages'
    },
    {
      url: "images/ruby.png",
      name: 'Ruby',
      type: 'Languages'
    },
    {
      url: "images/php.png",
      name: 'PHP',
      type: 'Languages'
    },
    {
      url: "images/scala.png",
      name: 'Scala',
      type: 'Languages'
    },
    {
      url: "images/nodejs.png",
      name: 'NodeJS',
      type: 'Languages'
    },
    {
      url: "images/cpp.png",
      name: 'C++',
      type: 'Languages'
    },
    {
      url: "images/git.png",
      name: 'Git',
      type: 'Tooling'
    },
    {
      url: "images/docker.png",
      name: 'Docker',
      type: 'Tooling'
    },
    {
      url: "images/docker-compose.png",
      name: 'Docker Compose',
      type: 'Tooling'
    },
    {
      url: "images/gitlab.png",
      name: 'GitLab',
      type: 'Tooling'
    },
    {
      url: "images/jenkins.png",
      name: 'Jenkins',
      type: 'Tooling'
    },
    {
      url: "images/aws.png",
      name: 'AWS',
      type: 'Cloud'
    },
    {
      url: "images/fabric8.png",
      name: 'Fabric8',
      type: 'Tooling'
    },
    {
      url: "images/yeoman.png",
      name: 'Yeoman',
      type: 'Tooling'
    },
    {
      url: "images/tomcat.png",
      name: 'Tomcat',
      type: 'Tooling'
    },
    {
      url: "images/spring.png",
      name: 'Spring',
      type: 'Frameworks'
    },
    {
      url: "images/symfony.png",
      name: 'Symfony',
      type: 'Frameworks'
    },
    {
      url: "images/react.png",
      name: 'React',
      type: 'Frameworks'
    },
    {
      url: "images/redux.png",
      name: 'Redux',
      type: 'Frameworks'
    },
    {
      url: "images/postgres.png",
      name: 'PostgreSQL',
      type: 'Databases'
    },
    {
      url: "images/mysql.png",
      name: 'MySQL',
      type: 'Databases'
    },
    {
      url: "images/mongodb.png",
      name: 'MongoDB',
      type: 'Databases'
    },
    {
      url: "images/elasticsearch.png",
      name: 'ElasticSearch',
      type: 'Databases'
    },
    {
      url: "images/kube.png",
      name: 'Kuberenetes',
      type: 'Tooling'
    },
    {
      url: "images/gruntjs.png",
      name: 'GruntJS',
      type: 'Tooling'
    },
    {
      url: "images/maven.png",
      name: 'Maven',
      type: 'Tooling'
    },
    {
      url: "images/terraform.png",
      name: 'Terraform',
      type: 'Cloud'
    },
    {
      url: "images/vagrant.png",
      name: 'Vagrant',
      type: 'Tooling'
    },
    {
      url: "images/yarn.png",
      name: 'Yarn',
      type: 'Tooling'
    },
    {
      url: "images/sqws.png",
      name: 'SQS',
      type: 'Cloud'
    },
    {
      url: "images/cf.png",
      name: 'CloudFormation',
      type: 'Cloud'
    },
    {
      url: "images/s3.png",
      name: 'S3',
      type: 'Cloud'
    },
    {
      url: "images/apigateway.png",
      name: 'API Gateway',
      type: 'Cloud'
    },
    {
      url: "images/rds.png",
      name: 'RDS',
      type: 'Cloud'
    },
    {
      url: "images/lambda.png",
      name: 'Lambda',
      type: 'Cloud'
    },
    {
      url: "images/ec2.png",
      name: 'EC2',
      type: 'Cloud'
    },
    {
      url: "images/angular.png",
      name: 'Angular',
      type: 'Frameworks'
    },
    {
      url: "images/ansible.png",
      name: 'Ansible',
      type: 'Frameworks'
    },
    {
      url: "images/hibernate.png",
      name: 'Hibernate',
      type: 'Frameworks'
    },
    {
      url: "images/openfaas.png",
      name: 'OpenFaaS',
      type: 'Frameworks'
    },
    {
      url: "images/tensorflow.png",
      name: 'Tensorflow',
      type: 'Frameworks'
    },
    {
      url: "images/mockito.png",
      name: 'Mockito',
      type: 'Testing'
    },
    {
      url: "images/junit.png",
      name: 'JUnit',
      type: 'Testing'
    },
    {
      url: "images/storybook.png",
      name: 'Storybook',
      type: 'Testing'
    },
    {
      url: "images/mocha.png",
      name: 'Mocha',
      type: 'Testing'
    },
    {
      url: "images/intelliJ.png",
      name: 'intelliJ',
      type: 'Tooling'
    },
    {
      url: "images/pycharm.png",
      name: 'PyCharm',
      type: 'Tooling'
    },
    {
      url: "images/vscode.png",
      name: 'VSCode',
      type: 'Tooling'
    },
    {
      url: "images/linux.png",
      name: 'Linux',
      type: 'OS'
    },
    {
      url: "images/raspberrypi.png",
      name: 'Raspberry Pi',
      type: 'OS'
    },
    {
      url: "images/selenium.png",
      name: 'Selenium',
      type: 'Testing'
    },
    {
      url: "images/ubuntu.png",
      name: 'Ubuntu',
      type: 'OS'
    },
    {
      url: "images/mac.png",
      name: 'Mac OSX',
      type: 'OS'
    },
    {
      url: "images/kali.png",
      name: 'Kali',
      type: 'OS'
    },
  ]
}

TechSkills.propTypes = {
  shouldShow: PropTypes.bool,
  defaultSize: PropTypes.number,
  techSkills: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string
  }))
}

export default TechSkills;
