import { Schema, model } from 'mongoose';

const calorieGoalSchema = new Schema({
  goal: {
    type: Number,
    required: true
  }
});

const CalorieGoal = model('CalorieGoal', calorieGoalSchema);

export default CalorieGoal