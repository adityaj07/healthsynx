// ExerciseLogging.js
import React, { useState } from 'react';
import ExerciseList from './ExerciseList';
import axiosInstance from '../api/axiosInstance';

const ExerciseLogging = () => {
  const [exercise, setExercise] = useState({
    type: '',
    duration: '',
    date: ''
  });

  const [loggedExercises, setLoggedExercises] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExercise({
      ...exercise,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/exercises/log', exercise);
      setLoggedExercises([...loggedExercises, exercise]);
      setExercise({
        type: '',
        duration: '',
        date: ''
      });
    } catch (error) {
      console.error('Error logging exercise:', error);
    }
  };

  return (
    <div className="w-[80%] mx-auto p-6 mt-12 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Exercise Logging</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Exercise Type</label>
          <input 
            type="text"
            name="type"
            value={exercise.type}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            placeholder="E.g., Running, Yoga, etc."
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Duration (minutes)</label>
          <input 
            type="number"
            name="duration"
            value={exercise.duration}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            min="1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input 
            type="date"
            name="date"
            value={exercise.date}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Log Exercise
        </button>
      </form>

      <ExerciseList exercises={loggedExercises} />
    </div>
     
  );
};

export default ExerciseLogging;
