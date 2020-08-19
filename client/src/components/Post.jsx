import React from 'react';

const Post = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      post
      <button type='button' onClick={logOut}>
        Log out
      </button>
    </div>
  );
};

export default Post;
