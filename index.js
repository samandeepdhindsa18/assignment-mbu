const express = require('express');
const app = express();

app.get('/jsonplaceholder.typicode.com/posts', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
