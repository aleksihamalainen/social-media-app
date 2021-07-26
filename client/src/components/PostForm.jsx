import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
  Container,
  CssBaseline,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import postService from '../services/posts';

const useStyles = makeStyles({
  content: {
    margin: '1em',
  },
  input: {
    margin: '1em',
  },
});

const PostForm = ({ visible, setVisible, posts, setPosts }) => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [notification, setNotification] = useState(false);

  const classes = useStyles();

  const handleClose = () => {
    setVisible(false);
  };

  const setErrorMessage = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  const setNotificationMessage = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  const addPost = () => {
    try {
      if (content !== '' && file !== null) {
        const formData = new FormData();
        formData.append('content', content);
        formData.append('postImage', file);
        postService.post(formData).then((response) => {
          setPosts(posts.concat(response).reverse());
        });
        setNotificationMessage();
        setContent('');
        setVisible(false);
      } else {
        setErrorMessage();
      }
    } catch (e) {
      setErrorMessage();
    }
  };

  return (
    <Container>
      <Snackbar
        open={notification}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Alert severity='success' variant='filled'>
          Post added successfully
        </Alert>
      </Snackbar>
      <CssBaseline />
      <Dialog open={visible} onClose={handleClose} fullWidth>
        <Snackbar
          open={error}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        >
          <Alert severity='error' variant='filled'>
            Content or image missing
          </Alert>
        </Snackbar>
        <DialogTitle>Add a new post</DialogTitle>
        <input
          className={classes.input}
          type='file'
          onChange={({ target }) => setFile(target.files[0])}
        />
        <TextField
          label='Content'
          variant='outlined'
          required
          multiline
          onChange={({ target }) => setContent(target.value)}
          className={classes.content}
        />
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' color='primary' onClick={addPost}>
            Add post
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

PostForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};

export default PostForm;
