import React from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline,
  Container,
  Dialog,
  makeStyles,
  Link,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({});

const UserModal = ({ visible, setVisible, users }) => {
  const classes = useStyles();

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Container>
      <CssBaseline />
      <Dialog open={visible} onClose={handleClose} fullWidth>
        {users.map((user) => {
          return (
            <Typography align='center' variant='h6' key={user}>
              <Link href={`/users/${user}`} color='inherit'>
                {user}
              </Link>
            </Typography>
          );
        })}
      </Dialog>
    </Container>
  );
};

UserModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default UserModal;
