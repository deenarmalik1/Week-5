// Example Node.js Code using route parameters

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

app.get('/users/:userId/posts/:postId', (req, res) => {
  res.json(req.params);
});