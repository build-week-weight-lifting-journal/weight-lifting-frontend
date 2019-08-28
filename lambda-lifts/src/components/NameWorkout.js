import React, { useState } from "react";
import moment from "moment";
import { makeWorkout } from "../actions";
import X from "../images/X.png";

// {
//   userId: int,
//   name: "",
//   date: "",
// */

const NameWorkout = props => {
  const [workout, setWorkout] = useState({
    userId: "",
    name: "",
    date: moment(Date.now()).format("l")
  });
  //need to push the workoutName to workout object in API

  const inputHandler = e => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };
  console.log("workout", workout);

  return (
    <div className="name-workout-card">
      <img src={X} />
      <h1>Name your workout</h1>
      <input
        type="text"
        name="name"
        value={workout.name}
        placeholder="Type Something"
        onChange={inputHandler}
      />
      <button
        className="next-btn"
        onClick={() => {
          makeWorkout(workout);
          props.history.push("/Workouts");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default NameWorkout;
