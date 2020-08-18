import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import Post from './components/Post';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>{user ? <Post /> : <Homepage />}</Route>
      </Switch>
    </Router>
  );
};

export default App;
