import { Router } from 'express';
const router = Router();
import CalorieGoal from '../models/CalorieGoal';
import LoggedMeal from '../models/LoggedMeal';


// Set Calorie Goal
router.post('/setGoal', async (req, res) => {
  try {
    const { goal } = req.body;
    const calorieGoal = new CalorieGoal({ goal });
    await calorieGoal.save();
    res.status(201).json({ message: 'Calorie goal set successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Log Meal
router.post('/logMeal', async (req, res) => {
  try {
    const { food, calories } = req.body;
    const loggedMeal = new LoggedMeal({ food, calories });
    await loggedMeal.save();
    res.status(201).json({ message: 'Meal logged successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;