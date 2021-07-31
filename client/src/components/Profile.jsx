import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
  const [loaded, setLoaded] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [following, setFollowing] = useState(false);
  const [posts, setPosts] = useState([]);

  const classes = useStyles();
  const history = useHistory();

  const name = useParams().username;
  const currentUser = JSON.parse(localStorage.getItem('user'));

  if (currentUser) {
    userService.setToken(currentUser.token);
  } else {
    history.push('/login');
  }

  useEffect(() => {
    userService.findByUsername(name).then((response) => {
      setUser(response);
      setFollowerCount(response.followers.length);
      setFollowingCount(response.following.length);
      setPosts(response.posts);
    });
  }, [name]);

  useEffect(() => {
    if (user) {
      setFollowing(
        user.followers.includes(JSON.parse(localStorage.getItem('user')).id)
      );
    }
  }, [user]);

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  const handleFollow = () => {
    userService.follow(user._id);
    setFollowing(true);
    setFollowerCount(followerCount + 1);
  };

  const handleUnfollow = () => {
    userService.unfollow(user._id);
    setFollowing(false);
    setFollowerCount(followerCount - 1);
  };

  if (!user && loaded === true) {
    return <NotFound />;
  }

  return (
    <div>
      <Navbar posts={posts} setPosts={setPosts} />
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
                  {posts.length}
                  &nbsp; posts
                </div>
                <Link color='inherit' className={classes.followers}>
                  {followerCount}
                  &nbsp; followers
                </Link>
                <Link color='inherit' className={classes.following}>
                  {followingCount}
                  &nbsp; following
                </Link>
              </div>
            </Typography>
          </div>
          <div className={classes.images}>
            {posts.map((post) => {
              if (post.user === user._id || post.user._id === user._id) {
                const url = '/'.concat(post.image);
                return (
                  <img
                    src={url}
                    alt='Post'
                    key={post._id}
                    width='25%'
                    height='25%'
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </Container>
      ) : null}
    </div>
  );
};

export default Profile;
