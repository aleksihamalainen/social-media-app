import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import userService from '../services/users';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '8em',
  },
  button: {
    marginTop: '1em',
  },
  grid: {
    marginTop: '1em',
  },
});

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const history = useHistory();
  const classes = useStyles();

  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      if (password === confirm) {
        await userService.register({ username, password });
        setUsername('');
        setPassword('');
        setConfirm('');
        history.push('/login');
      } else {
        setVisible(true);
        setMessage('Passwords must match');
        setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    } catch (error) {
      setVisible(true);
      setMessage('This username is already taken');
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  };

  return (
    <Container maxWidth='xs'>
      <Snackbar
        open={visible}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Alert severity='error' variant='filled'>
          {message}
        </Alert>
      </Snackbar>
      <CssBaseline />
      <div className={classes.container}>
        <Typography component='h1' variant='h4'>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
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
          <TextField
            onChange={({ target }) => setConfirm(target.value)}
            label='Confirm password'
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
            Register
          </Button>
          <Grid container className={classes.grid}>
            <Grid item>
              <Link href='/login'>Already have an account? Log in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
