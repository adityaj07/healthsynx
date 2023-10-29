import React, { useState } from "react";

const Goals = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [goals, setGoals] = useState([]);
  const [newGoalText, setNewGoalText] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddGoal = () => {
    if (newGoalText.trim() !== "") {
      const newGoal = { id: goals.length + 1, text: newGoalText, completed: false };
      setGoals([...goals, newGoal]);
      setNewGoalText("");
    }
  };

  const handleEditGoal = (id, text) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, text } : goal
    );
    setGoals(updatedGoals);
  };

  const handleDeleteGoal = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };

  const handleCompleteGoal = (id) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, completed: true } : goal
    );
    setGoals(updatedGoals);
  };

  const upcomingGoals = goals.filter((goal) => !goal.completed);
  const completedGoals = goals.filter((goal) => goal.completed);

  const totalGoals = goals.length;
  const completedGoalsCount = completedGoals.length;
  const completionPercentage = totalGoals > 0 ? (completedGoalsCount / totalGoals) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center space-x-4">
        <div
          className={`cursor-pointer p-2 ${
            activeTab === "upcoming" ? "bg-black rounded-md text-white" : "bg-gray-200 rounded-md"
          }`}
          onClick={() => handleTabChange("upcoming")}
        >
          Upcoming Goals
        </div>
        <div
          className={`cursor-pointer p-2 ${
            activeTab === "completed" ? "bg-black rounded-md text-white" : "bg-gray-200 rounded-md"
          }`}
          onClick={() => handleTabChange("completed")}
        >
          Completed Goals
        </div>
      </div>

      {activeTab === "upcoming" && (
        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="text"
              value={newGoalText}
              onChange={(e) => setNewGoalText(e.target.value)}
              placeholder="Add a new goal"
              className="border rounded-md p-2 flex-grow"
            />
            <button
              className="bg-black text-white px-4 py-2 rounded-md ml-2"
              onClick={handleAddGoal}
            >
              Add Goal
            </button>
          </div>
          <ul className="mt-4 list-decimal pl-6">
            {upcomingGoals.map((goal) => (
              <li
                key={goal.id}
                className="flex items-center justify-between mb-2 p-[1rem] bg-gray-300 rounded-lg"
              >
                <input
                  type="text"
                  value={goal.text}
                  onChange={(e) => handleEditGoal(goal.id, e.target.value)}
                  onBlur={() => handleEditGoal(goal.id, goal.text)} // Save changes on blur
                  className="border rounded px-2 py-1 mr-2 w-4/5 bg-transparent outline-none border-none"
                />
                <div className="flex gap-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => handleCompleteGoal(goal.id)}
                  >
                    Complete
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    onClick={() => handleDeleteGoal(goal.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "completed" && (
        <div className="mt-4">
          <ul className="list-decimal pl-6 ">
            {completedGoals.map((goal) => (
              <li key={goal.id} className="gap-2 p-[1rem] bg-gray-300 rounded-lg m-2">
                {goal.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-bold">Progress</h3>
        <div className="mt-2">
          <span>{`${completedGoalsCount} / ${totalGoals} Goals Completed`}</span>
        </div>
        <div className="flex items-center mt-2">
          <progress
            className="w-full rounded"
            value={completedGoalsCount}
            max={totalGoals}
          />
          <span className="ml-2">{`${completionPercentage.toFixed(
            2
          )}% Complete`}</span>
        </div>
      </div>
    </div>
  );
};

export default Goals;