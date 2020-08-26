import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import PostContainer from './components/PostContainer';
import Profile from './components/Profile';
import postService from './services/posts';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      const parsedUser = JSON.parse(loggedUser);
      setUser(parsedUser);
      postService.setToken(parsedUser.token);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          {user ? (
            <Redirect to='/' />
          ) : (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              setUser={setUser}
            />
          )}
        </Route>
        <Route path='/register'>
          {user ? (
            <Redirect to='/' />
          ) : (
            <Register
              username={username}
              password={password}
              confirm={confirm}
              setUsername={setUsername}
              setPassword={setPassword}
              setConfirm={setConfirm}
            />
          )}
        </Route>
        <Route path='/:username'>
          <Profile />
        </Route>
        <Route path='/'>{user ? <PostContainer /> : <Homepage />}</Route>
      </Switch>
    </Router>
  );
};

export default App;
