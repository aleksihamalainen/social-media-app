import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Container,
  CssBaseline,
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

const useStyles = makeStyles({
  container: {
    marginTop: '2em',
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
  image: {
    margin: '1em 0',
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

const Post = ({ post, posts, setPosts }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));

  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [like, setLike] = useState(post.likers.includes(currentUser.id));
  const [following, setFollowing] = useState(
    post.user.followers.includes(currentUser.id)
  );

  const classes = useStyles();

  const handleDelete = () => {
    postService.remove(post._id);
    setPosts(posts.filter((p) => p !== post));
    setOpen(false);
  };

  const handleLike = () => {
    postService.like(post._id);
    setLike(true);
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    postService.dislike(post._id);
    setLike(false);
    setLikes(likes - 1);
  };

  const handleFollow = () => {
    userService.follow(post.user._id);
    setFollowing(true);
  };

  const handleUnfollow = () => {
    userService.unfollow(post.user._id);
    setFollowing(false);
  };

  return (
    <Container maxWidth='md' className={classes.container}>
      <CssBaseline />
      <div className={classes.upper}>
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
          <Button variant='contained' color='default' onClick={handleUnfollow}>
            Unfollow
          </Button>
        ) : (
          <Button variant='contained' color='primary' onClick={handleFollow}>
            Follow
          </Button>
        )}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
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
      </div>
      <img
        src={post.image}
        alt='Post'
        width='100%'
        height='100%'
        className={classes.image}
      />
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
        <Link color='inherit'>
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
      <Typography component='div' variant='body2'>
        Posted &nbsp;
        {post.date}
      </Typography>
    </Container>
  );
};

Post.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};

export default Post;
