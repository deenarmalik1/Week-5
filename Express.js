// index.js
// Example code using express , this includes setting up express, routes etc
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alex' }]);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});