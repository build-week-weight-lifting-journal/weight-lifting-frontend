import React from "react";

const NameWorkout = () => {
  return (
    <div className="name-workout-card">
      <div>X</div>
      <h1>Name your workout</h1>
      <input type="text" name="workout" placeholder="Type Something" />
      <button className="next-btn">Next</button>
    </div>
  );
};

export default NameWorkout;
