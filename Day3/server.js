const express = require('express');
const app = express();

// Import the router
const userRoutes = require('./userRoutes');

// Mount with app.use()
app.use('/users', userRoutes); // All routes will start with /users

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});