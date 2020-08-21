import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Profile = () => {
  const user = useParams().username;
  return (
    <div>
      <Navbar />
      {user}
    </div>
  );
};

export default Profile;
