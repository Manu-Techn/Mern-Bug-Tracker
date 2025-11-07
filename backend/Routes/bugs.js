// Import express and the bug model
const express = require('express');
const Bug = require('../Models/Bug');
const router = express.Router();

// Get all bugs
router.get('/', async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) {
    next(error);
  }
});

// Add a new bug
router.post('/', async (req, res, next) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
});

// Update bug status
router.put('/:id', async (req, res, next) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBug);
  } catch (error) {
    next(error);
  }
});

// Delete a bug
router.delete('/:id', async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted successfully' });
  } catch (error) {
    next(error);
  }
});

// Export router
module.exports = router;