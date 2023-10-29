// ExerciseList.js
import React from 'react';

const ExerciseList = ({ exercises }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-4">
      <h2 className="text-2xl font-bold mb-4">Logged Exercises</h2>
      {exercises.length > 0 ? (
        <ul className="list-disc pl-4">
          {exercises.map((exercise, index) => (
            <li key={index} className="mb-2">
              <strong>{exercise.type}:</strong> {exercise.duration} minutes on {exercise.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No exercises logged yet.</p>
      )}
    </div>
  );
};

export default ExerciseList;
