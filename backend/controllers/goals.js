// import { config } from "dotenv";
import { connectDB } from "../database/dbConfig.js";
import GoalModel from "../models/goals.js";

//connecting the DB
connectDB();

export const getGoals = async (req, res) => {
    try {
        const userId = req.user.id;

        const goals = await GoalModel.find({user: userId});

        res.status(200).json(goals)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//create a new goal
export const createNewGoal = async (req, res) => {
    const {
        userId,
        title,
        description,
        startDate,
        endDate,
        targetValue,
      } = req.body;

    try {
        const newGoal = GoalModel.create({
            userId,
            title,
            description,
            startDate,
            endDate,
            targetValue,
            currentValue: 0,
            status: "Upcoming",
          });
        
          res.status(200).json({message: "Goal created successfully", goal: newGoal})
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
};
