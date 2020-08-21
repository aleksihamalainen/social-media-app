const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRouter = require('./routes/posts');
const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));
app.use('/uploads', express.static('uploads/'));
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

app.use((req, res) => {
  res.status(404).send('Page not found');
});

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
