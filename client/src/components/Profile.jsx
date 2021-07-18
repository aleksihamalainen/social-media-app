import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  makeStyles,
  CssBaseline,
  Container,
  Link,
  Typography,
  Button,
} from '@material-ui/core';
import Navbar from './Navbar';
import NotFound from './NotFound';
import userService from '../services/users';

const useStyles = makeStyles({
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: 'solid black',
  },
  followRow: {
    marginBottom: '1em',
    display: 'flex',
  },
  titleRow: {
    display: 'flex',
    margin: '1em 0',
  },
  images: {
    marginTop: '1em',
  },
  username: {
    marginRight: '0.5em',
  },
  button: {
    marginLeft: '0.5em',
  },
  following: {
    marginLeft: '0.5em',
  },
  followers: {
    margin: '0 0.5em',
  },
  posts: {
    marginRight: '0.5em',
  },
});

const Profile = () => {
  const [user, setUser] = useState(null);
  const [following, setFollowing] = useState(false);
  const classes = useStyles();

  const name = useParams().username;
  const currentUser = JSON.parse(localStorage.getItem('user'));
  userService.setToken(currentUser.token);

  useEffect(() => {
    userService.findByUsername(name).then((response) => {
      setUser(response);
    });
  }, [name]);

  const handleFollow = () => {
    userService.follow(user._id);
    setFollowing(true);
  };

  const handleUnfollow = () => {
    userService.unfollow(user._id);
    setFollowing(false);
  };

  return (
    <div>
      <Navbar />
      <CssBaseline />
      {user ? (
        <Container maxWidth='md'>
          <div className={classes.info}>
            <div className={classes.titleRow}>
              <Typography
                component='h1'
                variant='h5'
                className={classes.username}
              >
                {user.username}
              </Typography>
              {user.username !== currentUser.username ? (
                <div className={classes.button}>
                  {following ? (
                    <Button
                      variant='contained'
                      color='default'
                      onClick={handleUnfollow}
                    >
                      Unfollow
                    </Button>
                  ) : (
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleFollow}
                    >
                      Follow
                    </Button>
                  )}
                </div>
              ) : null}
            </div>
            <Typography component='div' variant='body1'>
              <div className={classes.followRow}>
                <div className={classes.posts}>
                  {user.posts.length}
                  &nbsp; posts
                </div>
                <Link color='inherit' className={classes.followers}>
                  {user.followers.length}
                  &nbsp; followers
                </Link>
                <Link color='inherit' className={classes.following}>
                  {user.following.length}
                  &nbsp; following
                </Link>
              </div>
            </Typography>
          </div>
          <div className={classes.images}>
            {user.posts.map((post) => (
              <img
                src={post.image}
                alt='Post'
                key={post._id}
                width='25%'
                height='25%'
              />
            ))}
          </div>
        </Container>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Profile;
