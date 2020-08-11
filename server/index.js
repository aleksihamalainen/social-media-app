const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRouter = require('./routes/posts');
const userRouter = require('./routes/users');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.log(error);
}

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
