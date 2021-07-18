import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PostForm from './PostForm';

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  postButton: {
    marginLeft: '5em',
  },
});

const Navbar = ({ posts, setPosts }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [visible, setVisible] = useState(false);

  const open = Boolean(anchorEl);

  const history = useHistory();
  const classes = useStyles();

  const currentUser = JSON.parse(localStorage.getItem('user'));

  const logOut = () => {
    localStorage.clear();
    setAnchorEl(null);
    history.push('/');
    window.location.reload();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.navbar}>
        <div>
          <IconButton color='inherit' onClick={() => history.push('/')}>
            <HomeIcon />
          </IconButton>
          <Button
            className={classes.postButton}
            onClick={() => setVisible(true)}
            variant='contained'
          >
            New post
          </Button>
          <PostForm
            visible={visible}
            setVisible={setVisible}
            posts={posts}
            setPosts={setPosts}
          />
        </div>
        <IconButton color='inherit' onClick={handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          open={open}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem
            onClick={() => {
              history.push(`/users/${currentUser.username}`);
              setAnchorEl(null);
            }}
          >
            My profile
          </MenuItem>
          <MenuItem onClick={logOut}>Log out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

PostForm.propTypes = {
  posts: PropTypes.array,
  setPosts: PropTypes.func,
};

export default Navbar;
