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
import UserModal from './UserModal';
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
  image: {
    maxWidth: '225px',
    maxHeight: '225px',
    margin: '0.1em',
    '&:hover': {
      opacity: '0.8',
    },
  },
});

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [following, setFollowing] = useState(false);
  const [posts, setPosts] = useState([]);
  const [followersUsers, setFollowersUsers] = useState([]);
  const [visibleFollowing, setVisibleFollowing] = useState(false);
  const [visibleFollowers, setVisibleFollowers] = useState(false);

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
      const userIds = user.followers.map((user) => user._id);
      setFollowing(
        userIds.includes(JSON.parse(localStorage.getItem('user')).id)
      );
      const usernames = user.followers.map((user) => user.username);
      setFollowersUsers(usernames);
    }
  }, [user]);

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  const handleFollow = () => {
    userService.follow(user._id);
    setFollowing(true);
    setFollowerCount(followerCount + 1);
    setFollowersUsers(followersUsers.concat(currentUser.username));
  };

  const handleUnfollow = () => {
    userService.unfollow(user._id);
    setFollowing(false);
    setFollowerCount(followerCount - 1);
    setFollowersUsers(
      followersUsers.filter((user) => user !== currentUser.username)
    );
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
          <UserModal
            visible={visibleFollowing}
            setVisible={setVisibleFollowing}
            users={user.following.map((following) => following.username)}
          />
          <UserModal
            visible={visibleFollowers}
            setVisible={setVisibleFollowers}
            users={followersUsers}
          />
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
                <Link
                  color='inherit'
                  className={classes.followers}
                  href='#'
                  onClick={() => setVisibleFollowers(true)}
                >
                  {followerCount}
                  &nbsp; followers
                </Link>
                <Link
                  color='inherit'
                  className={classes.following}
                  href='#'
                  onClick={() => setVisibleFollowing(true)}
                >
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
                  <Link href={`/posts/${post._id}`} key={post._id}>
                    <img
                      src={url}
                      alt='Post'
                      key={post._id}
                      className={classes.image}
                      width='25%'
                      height='25%'
                    />
                  </Link>
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
