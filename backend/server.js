// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bugRoutes = require('./routes/bugs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use the bug routes
app.use('/api/bugs', bugRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bugtracker')
  .then(() => console.log('MongoDB successfully connected...!'))
  .catch(err => console.error(err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Sorry, something went wrong on the server!' });
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));

// Export
module.exports = app;