const express = require('express');
const app = express();

app.get('/jsonplaceholder.typicode.com/posts', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/reqres.in/api/login', (req, res) => {
  res.send({ login: 'successful' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
