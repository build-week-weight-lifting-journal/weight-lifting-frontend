import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { makeWorkout } from "../actions";
import X from "../images/X.png";

// Journal shape
// {
//   userId: int,
//   name: "",
//   date: "",
// */

const NameWorkout = props => {
  const [workout, setWorkout] = useState({
    userId: props.userId,
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
          props.makeWorkout(workout);
          props.history.push("/ExerciseList");
        }}
      >
        Next
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.login.userId
  };
};

export default connect(
  mapStateToProps,
  { makeWorkout }
)(NameWorkout);
