import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const history = useHistory();
  const classes = useStyles();

  const currentUser = JSON.parse(localStorage.getItem('user'));

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.navbar}>
        <IconButton color='inherit' onClick={() => history.push('/')}>
          <HomeIcon />
        </IconButton>
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
          <MenuItem onClick={() => history.push(`/${currentUser.username}`)}>
            My profile
          </MenuItem>
          <MenuItem onClick={logOut}>Log out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
