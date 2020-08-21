const express = require('express');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).send({ error: 'Post not found' });
  }
});

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

router.post('/', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      res.status(401).send({ error: 'Token missing or invalid' });
    } else {
      const user = await User.findById(decodedToken.id);
      const post = new Post({
        content: req.body.content,
        user: user._id,
      });
      const savedPost = await post.save();
      user.posts = user.posts.concat(savedPost._id);
      await user.save();
      res.json(savedPost);
    }
  } catch (error) {
    res.status(400).send({ error: 'An error occurred' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).send({ error: 'Post not found' });
  }
});

module.exports = router;
