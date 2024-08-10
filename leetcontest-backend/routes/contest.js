// routes/contest.js
const express = require('express');
const Contest = require('../models/Contest');
const router = express.Router();

// Create a new contest
router.post('/create', async (req, res) => {
  try {
    const { title, questions, timeLimit } = req.body;
    const contest = new Contest({ title, questions, timeLimit });
    await contest.save();
    res.status(201).json({ message: 'Contest created successfully', contest });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get all contests
router.get('/', async (req, res) => {
  try {
    const contests = await Contest.find();
    res.status(200).json(contests);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;

