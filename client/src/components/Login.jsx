import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import loginService from '../services/login';

const Login = ({ username, password, setUsername, setPassword }) => {
  const history = useHistory();

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
    <div>
      <form onSubmit={handleLogin}>
        <TextField
          onChange={({ target }) => setUsername(target.value)}
          label='Username'
          variant='outlined'
        />
        <TextField
          onChange={({ target }) => setPassword(target.value)}
          label='Password'
          variant='outlined'
        />
        <Button type='submit' color='primary'>
          Log in
        </Button>
      </form>
    </div>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Login;
