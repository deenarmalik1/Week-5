const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Get all users');
});

router.get('/:id', (req, res) => {
  res.send(`Get user with id ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('Create new user');
});

// Export the router
module.exports = router;