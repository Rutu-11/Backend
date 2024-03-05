const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route for user signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, course, session } = req?.body;
    const user = new User({ name, email, password, session, course });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET route to get all existing users
router.get('/', async (req, res) => {
    try {
      // Retrieve all users from the database
      const users = await User.find();
  
      // Return the list of users
      res.status(200).json(users);
    } catch (err) {
      // Handle errors
      res.status(500).json({ error: err.message });
    }
  });
module.exports = router;
