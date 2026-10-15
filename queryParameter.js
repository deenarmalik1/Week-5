// Example code in Node.js using query parameters

// URL: /search?q=express&page=2
app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  const page = req.query.page;
  res.json(req.query);
});

// URL: /products?category=books&sort=price
app.get('/products', (req, res) => {
  const category = req.query.category;
  const sort = req.query.sort;
  res.send(`Category: ${category}, Sort by: ${sort}`);
});