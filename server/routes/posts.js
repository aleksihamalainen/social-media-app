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

router.get('/', async (req, res) => {
  const posts = await Post.find({}).populate('user');
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

router.post('/', upload.single('postImage'), async (req, res) => {
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
        image: req.file.path,
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
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      res.status(401).send({ error: 'Token missing or invalid' });
    } else {
      const user = await User.findById(decodedToken.id);
      const blog = await Post.findById(req.params.id);
      if (user._id.toString() === blog.user._id.toString()) {
        await blog.remove();
        res.status(204).end();
      } else {
        res.status(403).send({ error: 'Unauthorized' });
      }
    }
  } catch (error) {
    res.status(404).send({ error: 'Post not found' });
  }
});

module.exports = router;
