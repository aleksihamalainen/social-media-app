import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import Navbar from './Navbar';
import userService from '../services/users';

const Profile = () => {
  const [user, setUser] = useState(null);

  const name = useParams().username;

  useEffect(() => {
    userService.findByUsername(name).then((response) => {
      setUser(response);
    });
  }, [name]);

  return (
    <div>
      <Navbar />
      <CssBaseline />
      {user && (
        <Container maxWidth='md'>
          {user.username}
          {user.posts.map((post) => (
            <div>{post}</div>
          ))}
        </Container>
      )}
    </div>
  );
};

export default Profile;
