// Exercise.js

import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  type: String,
  duration: Number,
  date: Date,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
