import React, { useState } from "react";
import X from "../images/X.png";

const NameWorkout = () => {
  const [workoutName, setWorkoutName] = useState("");
  //need to push the workoutName to workout object in API

  const inputHandler = e => {
    setWorkoutName(e.target.value);
  };
  console.log("workoutname", workoutName);

  return (
    <div className="name-workout-card">
      <img src={X} />
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
