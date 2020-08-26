import React, { useState, useEffect } from 'react';
import { makeStyles, Container, CssBaseline } from '@material-ui/core';
import Navbar from './Navbar';
import Post from './Post';
import postService from '../services/posts';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    postService.getAll().then((result) => setPosts(result.reverse()));
  }, []);

  return (
    <div>
      <Navbar />
      <Container maxWidth='md' className={classes.container}>
        <CssBaseline />
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </Container>
    </div>
  );
};

export default PostContainer;
