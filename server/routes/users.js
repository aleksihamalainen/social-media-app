const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

router.post('/', async (req, res) => {
  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      username: req.body.username,
      passwordHash,
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (error) {
      res.status(403).send({ error: 'User already exists in the database' });
    }
  } catch (error) {
    res.status(400).send({ error: 'Invalid parameters' });
  }
});

router.get('/', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    jwt.verify(token, process.env.SECRET);
    const users = await User.find({}).populate('posts');
    res.json(users);
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.get('/:username', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ username: req.params.username })
      .populate('posts')
      .populate('following')
      .populate('followers');
    if (!user) {
      res.status(404).send({ error: 'User not found' });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    try {
      const user = await User.findById(req.params.id);
      if (decodedToken.id.toString() === user._id.toString()) {
        await User.deleteOne({ _id: user._id });
        res.status(204).end();
      } else {
        res.status(403).send({ error: 'Unauthorized' });
      }
    } catch (error) {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.post('/:id/followers', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const currentUser = await User.findById(decodedToken.id);
    try {
      const user = await User.findById(req.params.id);
      if (decodedToken.id.toString() !== user._id.toString()) {
        if (user.followers.includes(currentUser._id)) {
          res
            .status(400)
            .send({ error: 'You have followed this user already' });
        } else {
          await user.updateOne({
            $push: { followers: currentUser },
          });
          await currentUser.updateOne({
            $push: { following: user },
          });
          res.status(200).end();
        }
      } else {
        res.status(403).send({ error: 'You cannot follow yourself' });
      }
    } catch (error) {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

router.delete('/:id/followers', async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const currentUser = await User.findById(decodedToken.id);
    try {
      const user = await User.findById(req.params.id);
      if (decodedToken.id.toString() !== user._id.toString()) {
        if (!user.followers.includes(currentUser._id)) {
          res.status(400).send({ error: 'You have not followed this user' });
        } else {
          await user.updateOne({
            $pull: { followers: currentUser._id },
          });
          await currentUser.updateOne({
            $pull: { following: user._id },
          });
          res.status(200).end();
        }
      } else {
        res.status(403).send({ error: 'You cannot unfollow yourself' });
      }
    } catch (error) {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(401).send({ error: 'Token missing or invalid' });
  }
});

module.exports = router;
