const express = require('express');
const app = express();

// app.get('/jsonplaceholder.typicode.com/posts', (req, res) => {
//   res.send({ hi: 'there' });
// });

// app.get('/reqres.in/api/login', (req, res) => {
//   res.send({ login: 'successful' });
// });

//Routing in production(heroku) environment
if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  // like some specific files such as main.js or main.css file
  app.use(express.static('client/build'));
  //express will serve index.html file
  //if it doesn't recognize the route.
  //assumption is that react router knows what to do with this route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
