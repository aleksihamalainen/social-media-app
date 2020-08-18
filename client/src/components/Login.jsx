import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import loginService from '../services/login';

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

const Login = ({ username, password, setUsername, setPassword }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const user = await loginService.login({ username, password });
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/');
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
              <Link href='/register'>Don&apos;t have an account? Sign Up</Link>
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
};

export default Login;
