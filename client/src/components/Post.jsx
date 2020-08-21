import React from 'react';
import { makeStyles, Container, CssBaseline } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Post = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container maxWidth='md' className={classes.container}>
        <CssBaseline />
        post
      </Container>
    </div>
  );
};

export default Post;
