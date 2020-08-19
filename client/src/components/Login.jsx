import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  TextField,
  Typography,
  CssBaseline,
  Button,
  Container,
  Grid,
  Link,
} from '@material-ui/core';
import userService from '../services/user';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5em',
  },
  button: {
    marginTop: '1em',
  },
  grid: {
    marginTop: '1em',
  },
});

const Login = ({ username, password, setUsername, setPassword, setUser }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const user = await userService.login({ username, password });
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/');
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth='xs'>
      <CssBaseline />
      <div className={classes.container}>
        <Typography component='h1' variant='h4'>
          Log in
        </Typography>
        <form className={classes.form} onSubmit={handleLogin} noValidate>
          <TextField
            onChange={({ target }) => setUsername(target.value)}
            label='Username'
            variant='outlined'
            margin='normal'
            fullWidth
            required
          />
          <TextField
            onChange={({ target }) => setPassword(target.value)}
            label='Password'
            variant='outlined'
            type='password'
            margin='normal'
            fullWidth
            required
          />
          <Button
            type='submit'
            color='primary'
            fullWidth
            variant='contained'
            className={classes.button}
          >
            Log in
          </Button>
          <Grid container className={classes.grid}>
            <Grid item>
              <Link href='/register'>Don&apos;t have an account? Register</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Login;
