/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import Zoom from "@material-ui/core/Zoom/Zoom";

const TITLE_FONT_SIZE = 20;

class TechSkills extends React.Component {

  render() {
    const { shouldShow, techSkills, defaultSize } = this.props;
    return (
      <div style={{ marginLeft: 'auto' }} >
        {shouldShow && <div>
          <div class="tech-skills" style={{ display: 'inline-flex' }}>
            {["Languages", "Tooling", "Frameworks", "Cloud", "Testing", "OS", "Databases"].map((sectionValue, sectionIndex) => {
              return (<div>
                <div>
                  <SectionTitle titleFontSize={TITLE_FONT_SIZE} titleText={sectionValue} />
                  {
                    techSkills.filter(value => value.type === sectionValue).map((value, index) => {
                      return <div>
                        <Zoom in style={{ transitionDelay: `${40 * (index + 10*sectionIndex)}ms` }}>
                          <div  style={{ textAlign: 'center' }} >
                            <img src={value.url} alt={value.name} style={{ margin: '3px', height: `${defaultSize}px` }} />
                            <SectionTitle titleFontSize={16} titleText={value.name} />
                          </div>
                        </Zoom>
                      </div>
                    })
                  }
                </div>
              </div>)
            })}
          </div>
        </div>}
      </div>);
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
      url: "images/fabric8.png",
      name: 'Fabric8',
      type: 'Tooling'
    },
    {
      url: "images/spring.png",
      name: 'Spring',
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
      url: "images/apigateway.svg",
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
      url: "images/angular.svg",
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
      url: "images/cucumber.png",
      name: 'Cucumber',
      type: 'Testing'
    },
    {
      url: "images/linux.png",
      name: 'Linux',
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
