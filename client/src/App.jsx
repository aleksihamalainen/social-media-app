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
import NotFound from './components/NotFound';
import postService from './services/posts';
import userService from './services/users';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      const parsedUser = JSON.parse(loggedUser);
      setUser(parsedUser);
      postService.setToken(parsedUser.token);
      userService.setToken(parsedUser.token);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          {user ? <Redirect to='/' /> : <Login setUser={setUser} />}
        </Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
        <Route path='/users/:username'>
          <Profile />
        </Route>
        <Route exact path='/'>
          {user ? <PostContainer /> : <Homepage />}
        </Route>
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
