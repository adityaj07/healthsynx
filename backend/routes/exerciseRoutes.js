// exerciseRoutes.js

import express from 'express';
import Exercise from '../models/Exercise.js'; // Import your Mongoose model
import { connectDB } from '../database/dbConfig.js';
connectDB();

const router = express.Router();

// Route to log exercise
router.post('/log', async (req, res) => {
  try {
    const { type, duration, date } = req.body;
    const newExercise = new Exercise({ type, duration, date });
    await newExercise.save();
    res.json({ message: 'Exercise logged successfully' });
  } catch (error) {
    console.error('Error logging exercise:', error);
    res.status(500).json({ message: 'Error logging exercise' });
  }
});

// Route to get logged exercises
router.get('/logged', async (req, res) => {
  try {
    const loggedExercises = await Exercise.find();
    res.json(loggedExercises);
  } catch (error) {
    console.error('Error fetching logged exercises:', error);
    res.status(500).json({ message: 'Error fetching logged exercises' });
  }
});

export default router;
