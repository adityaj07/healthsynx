// import React, { useState } from 'react';
// import axios from 'axios';
// import axiosInstance from '../api/axiosInstance';

// const CalorieTracker = () => {
//   const [calorieGoal, setCalorieGoal] = useState(null);
//   const [totalCalories, setTotalCalories] = useState(0);
//   const [goal, setGoal] = useState('');

//   const handleSetGoal = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axiosInstance.post('http://localhost:3000/api/calorieTracker', {
//         calorieGoal: Number(goal)
//       });

//       if (response.status !== 200) {
//         throw new Error('Setting goal failed');
//       }

//       setCalorieGoal(Number(goal));
//       setGoal('');
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const handleLogMeal = async (e) => {
//     e.preventDefault();

//     const food = e.target.elements.food.value;
//     const calories = Number(e.target.elements.calories.value);

//     try {
//       const response = await axiosInstance.post('http://localhost:3000/api/calorieTracker/logMeal', { food, calories });

//       if (response.status !== 200) {
//         throw new Error('Meal logging failed');
//       }

//       setTotalCalories(totalCalories + calories);
//       e.target.reset();
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const progress = calorieGoal ? (totalCalories / calorieGoal) * 100 : 0;
//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
//       {!calorieGoal && (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Set Daily Calorie Goal</h2>
//           <form onSubmit={handleSetGoal}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Calorie Goal</label>
//               <input 
//                 type="number"
//                 value={goal}
//                 onChange={(e) => setGoal(e.target.value)}
//                 className="border rounded w-full py-2 px-3"
//                 min="1"
//                 required
//               />
//             </div>
//             <button 
//               type="submit" 
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Set Goal
//             </button>
//           </form>
//         </>
//       )}

//       {calorieGoal && (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Log Meals</h2>
//           <form onSubmit={handleLogMeal}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Food Name</label>
//               <input 
//                 type="text"
//                 name="food"
//                 className="border rounded w-full py-2 px-3"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Calories</label>
//               <input 
//                 type="number"
//                 name="calories"
//                 className="border rounded w-full py-2 px-3"
//                 min="1"
//                 required
//               />
//             </div>
//             <button 
//               type="submit" 
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Log Meal
//             </button>
//           </form>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">Calorie Goal</h3>
//             <p>{calorieGoal} Calories</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">Total Calories Consumed</h3>
//             <p>{totalCalories} Calories</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">Progress</h3>
//             <div className="relative pt-1">
//               <div className="flex mb-2 items-center justify-between">
//                 <div>
//                   <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
//                     {progress.toFixed(2)}%
//                   </span>
//                 </div>
//               </div>
//               <div className=" mt-2 w-full overflow-hidden h-2 text-xs flex rounded bg-teal-200">
//                 <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CalorieTracker;


import React, { useState } from 'react';

const CalorieTracker = () => {
  const [calorieGoal, setCalorieGoal] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [goal, setGoal] = useState('');

  const handleSetGoal = (e) => {
    e.preventDefault();
    setCalorieGoal(Number(goal));
  };

  const handleLogMeal = (e) => {
    e.preventDefault();
    // Simulated API call to log the meal
    const mealCalories = Number(e.target.elements.calories.value);
    setTotalCalories(totalCalories + mealCalories);
    e.target.reset();
  };

  const progress = calorieGoal ? (totalCalories / calorieGoal) * 100 : 0;

  return (
    <div className="w-[80%] mx-auto p-6 mt-12 bg-white rounded shadow">
      {!calorieGoal && (
        <>
          <h2 className="text-2xl font-bold mb-4">Set Daily Calorie Goal</h2>
          <form onSubmit={handleSetGoal}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Calorie Goal</label>
              <input 
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="border rounded w-full py-2 px-3"
                min="1"
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Set Goal
            </button>
          </form>
        </>
      )}

      {calorieGoal && (
        <>
          <h2 className="text-2xl font-bold mb-4">Log Meals</h2>
          <form onSubmit={handleLogMeal}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Food Name</label>
              <input 
                type="text"
                name="food"
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Calories</label>
              <input 
                type="number"
                name="calories"
                className="border rounded w-full py-2 px-3"
                min="1"
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Log Meal
            </button>
          </form>

          <div className="mb-4 mt-24 p-[1rem] bg-slate-400 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Calorie Goal</h3>
            <p>{calorieGoal} Calories</p>
          </div>
          <div className="mb-4 p-[1rem] bg-slate-400 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Total Calories Consumed</h3>
            <p>{totalCalories} Calories</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Progress</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    {progress.toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className="flex mt-2 w-full overflow-hidden h-2 text-xs  rounded bg-teal-200">
                <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CalorieTracker;
