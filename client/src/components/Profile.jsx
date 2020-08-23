import React from 'react';
import { useParams } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import Navbar from './Navbar';

const Profile = () => {
  const user = useParams().username;
  return (
    <div>
      <Navbar />
      <Container maxWidth='md'>
        <CssBaseline />
        {user}
      </Container>
    </div>
  );
};

export default Profile;
