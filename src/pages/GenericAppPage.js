import React from 'react';
import '../App.css';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from '../components/AppBar';
import { Container } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: '10px',
    marginTop: '5px',
    textAlign: 'center'
  },
});

class GenericAppPage extends React.Component {

  render() {
    const { classes, children, backgroundColor } = this.props;
    return (
      <div className={classes.root} style={{ backgroundColor: `${backgroundColor}` }}>
        <AppBar />
        <Container className={classes.paper} maxWidth={"xl"}>
          {children}
        </Container>
      </div>
    );
  }
}

GenericAppPage.propTypes = {
  classes: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string
};

GenericAppPage.defaultProps = {
  backgroundColor: 'white'
}

export default withStyles(styles)(GenericAppPage);
