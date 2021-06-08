import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, CssBaseline, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    backgroundColor: '#3f51b5',
  },
  elementContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: '3em',
    marginBottom: '5em',
  },
  login: {
    marginRight: '1em',
  },
  register: {
    marginLeft: '1em',
  },
  title: {
    marginTop: '2em',
  },
});

const Homepage = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.elementContainer}>
        <CssBaseline />
        <Typography component='h1' variant='h2' className={classes.title}>
          test
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            color='primary'
            variant='contained'
            onClick={() => history.push('/login')}
            className={classes.login}
          >
            Log in
          </Button>
          <Button
            variant='contained'
            onClick={() => history.push('/register')}
            className={classes.register}
          >
            Register
          </Button>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className={classes.image}
        >
          <path
            fill='#3f51b5'
            fillOpacity='1'
            d='M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          />
        </svg>
      </div>
    </div>
  );
};

export default Homepage;
