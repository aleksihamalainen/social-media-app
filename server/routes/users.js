const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({}).populate('posts');
  res.json(users);
});

router.post('/', async (req, res) => {
  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      username: req.body.username,
      passwordHash,
    });
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send({ error: 'An error occurred' });
  }
});

router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      res.status(404).send({ error: 'User not found' });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(404).send({ error: 'User not found' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).send({ error: 'User not found' });
  }
});

module.exports = router;
