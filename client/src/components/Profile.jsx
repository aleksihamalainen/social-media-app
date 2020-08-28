import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
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
      <CssBaseline />
      {user && (
        <Container maxWidth='md'>
          <div>{user.username}</div>
          <div>
            {user.posts.map((post) => (
              <img src={post.image} alt='Post' />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Profile;
