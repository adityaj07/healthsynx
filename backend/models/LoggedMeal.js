import { Schema, model } from 'mongoose';

const loggedMealSchema = new Schema({
  food: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  }
});

export default model('LoggedMeal', loggedMealSchema);
