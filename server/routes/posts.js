const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const Post = require('../models/Post');
const User = require('../models/User');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid filetype'), false);
  }
};

const upload = multer({ storage, fileFilter });

const router = express.Router();

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

router.get('/', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    jwt.verify(token, process.env.SECRET);
    const posts = await Post.find({}).populate('user');
    res.json(posts);
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    jwt.verify(token, process.env.SECRET);
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(404).send({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.post('/', upload.single('postImage'), async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodedToken.id);
    try {
      const post = new Post({
        content: req.body.content,
        user,
        image: req.file.path,
      });
      const savedPost = await post.save();
      user.posts = user.posts.concat(savedPost._id);
      await user.save();
      res.json(savedPost);
    } catch (error) {
      res.status(400).send({ error: 'Invalid parameters' });
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodedToken.id);
    console.log(user);
    try {
      const removedPost = await Post.findById(req.params.id);
      if (user._id.toString() === removedPost.user._id.toString()) {
        await removedPost.remove();
        user.posts = user.posts.filter((post) => post._id !== removedPost._id);
        res.status(204).end();
      } else {
        res.status(403).send({ error: 'Unauthorized' });
      }
    } catch (error) {
      res.status(404).send({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.post('/:id/likes', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodedToken.id);
    try {
      const post = await Post.findById(req.params.id);
      if (post.likers.includes(user._id)) {
        res.status(400).send({ error: 'You have liked this post already' });
      } else {
        await post.updateOne({
          $inc: { likes: 1 },
          $push: { likers: user },
        });
        res.status(200).end();
      }
    } catch (error) {
      res.status(404).send({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.delete('/:id/likes', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodedToken.id);
    try {
      const post = await Post.findById(req.params.id);
      if (post.likers.includes(user._id)) {
        await post.updateOne({
          $inc: { likes: -1 },
          $pull: { likers: user._id },
        });
      } else {
        res.status(400).send({ error: 'You have not liked this post' });
      }
      res.status(200).end();
    } catch (error) {
      res.status(404).send({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

module.exports = router;
