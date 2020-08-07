const express = require('express');
const Post = require('../models/post');

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

router.post('/', async (req, res) => {
  try {
    const post = new Post({
      content: req.body.content,
    });
    const savedPost = await post.save();
    res.json(savedPost);
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
