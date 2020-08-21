const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now() },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
