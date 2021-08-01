import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  makeStyles,
  CssBaseline,
  Container,
  Typography,
  Link,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import postService from '../services/posts';
import userService from '../services/users';
import NotFound from './NotFound';
import UserModal from './UserModal';

const useStyles = makeStyles({
  container: {
    marginTop: '2em',
    marginBottom: '2em',
    padding: '1em',
    border: 'solid black',
  },
  usernameLink: {
    fontWeight: 'bold',
  },
  upper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    margin: '1em 0',
    maxHeight: '600px',
    maxWidth: '600px',
  },
  likeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heart: {
    padding: '0',
  },
});

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [following, setFollowing] = useState(false);
  const [likes, setLikes] = useState(0);
  const [likers, setLikers] = useState([]);
  const [like, setLike] = useState(false);

  const history = useHistory();
  const classes = useStyles();

  const id = useParams().postId;
  const currentUser = JSON.parse(localStorage.getItem('user'));

  if (currentUser) {
    postService.setToken(currentUser.token);
  } else {
    history.push('/login');
  }

  const handleFollow = () => {
    userService.follow(post.user._id);
    setFollowing(true);
  };

  const handleUnfollow = () => {
    userService.unfollow(post.user._id);
    setFollowing(false);
  };

  const handleDelete = () => {
    postService.remove(post._id);
    setOpen(false);
    history.push('/');
  };

  const handleLike = () => {
    postService.like(post._id);
    setLike(true);
    setLikes(likes + 1);
    setLikers(likers.concat(currentUser.username));
  };

  const handleDislike = () => {
    postService.dislike(post._id);
    setLike(false);
    setLikes(likes - 1);
    setLikers(likers.filter((liker) => liker !== currentUser.username));
  };

  useEffect(() => {
    postService.findById(id).then((response) => {
      setPost(response);
      setLikes(response.likes);
      setLikers(response.likers.map((liker) => liker.username));
      setFollowing(
        response.user.followers.includes(
          JSON.parse(localStorage.getItem('user')).id
        )
      );
      const likerIds = response.likers.map((liker) => liker._id);
      setLike(likerIds.includes(JSON.parse(localStorage.getItem('user')).id));
    });
  }, [id]);

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  if (!post && loaded === true) {
    return <NotFound />;
  }

  return (
    <div>
      {post ? (
        <Container maxWidth='md' className={classes.container}>
          <CssBaseline />
          <UserModal visible={visible} setVisible={setVisible} users={likers} />
          <Typography component='div' className={classes.upper}>
            <Typography component='h1' variant='h6'>
              <Link href={`/users/${post.user.username}`} color='inherit'>
                {post.user.username}
              </Link>
            </Typography>
            {post.user.username === currentUser.username ? (
              <Button
                variant='contained'
                color='secondary'
                onClick={() => setOpen(true)}
              >
                Delete
              </Button>
            ) : following ? (
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
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>
                Are you sure you want to delete this post?
              </DialogTitle>
              <DialogActions>
                <Button variant='contained' onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </Typography>
          <Typography component='div' className={classes.imageContainer}>
            <img
              src={'/'.concat(post.image)}
              alt='Post'
              width='100%'
              height='100%'
              className={classes.image}
            />
          </Typography>
          <Typography component='div' className={classes.likeContainer}>
            {like ? (
              <IconButton className={classes.heart} onClick={handleDislike}>
                <FavoriteIcon color='secondary' />
              </IconButton>
            ) : (
              <IconButton className={classes.heart} onClick={handleLike}>
                <FavoriteBorderIcon color='secondary' />
              </IconButton>
            )}
            <Link color='inherit' href='#' onClick={() => setVisible(true)}>
              {likes}
              &nbsp;likes
            </Link>
          </Typography>
          <Typography component='div' variant='body2'>
            <Link
              href={`/users/${post.user.username}`}
              color='inherit'
              className={classes.usernameLink}
            >
              {post.user.username}
            </Link>
            &nbsp;
            {post.content}
          </Typography>
        </Container>
      ) : null}
    </div>
  );
};

export default SinglePost;
