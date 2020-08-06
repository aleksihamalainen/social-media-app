const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('hello world');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
