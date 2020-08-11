const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const match = await bcrypt.compare(req.body.password, user.passwordHash);
    if (!(match && user)) {
      res.status(401).send({ error: 'Invalid username or password' });
    }
    const userForToken = {
      username: user.username,
      id: user.id,
    };
    const token = jwt.sign(userForToken, process.env.SECRET);
    res.status(200).send({ token, username: user.username });
  } catch (error) {
    res.status(400).send({ error: 'An error occurred' });
  }
});

module.exports = router;
