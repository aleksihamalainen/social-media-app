const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Post', postSchema);
