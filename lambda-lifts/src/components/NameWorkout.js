import React, { useState } from "react";

const NameWorkout = () => {
  const [workoutName, setWorkoutName] = useState("");

  const inputHandler = e => {
    setWorkoutName(e.target.value);
  };
  console.log("workoutname", workoutName);

  return (
    <div className="name-workout-card">
      <div>X</div>
      <h1>Name your workout</h1>
      <input
        type="text"
        name="workout"
        value={workoutName}
        placeholder="Type Something"
        onChange={inputHandler}
      />
      <button className="next-btn">Next</button>
    </div>
  );
};

export default NameWorkout;
