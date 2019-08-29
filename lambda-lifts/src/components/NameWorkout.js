import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { makeWorkout, editWorkoutName } from "../actions";

import X from "../images/X.png";

// Journal shape
// {
//   userId: int,
//   name: "",
//   date: "",
// */

const NameWorkout = props => {
  const [workout, setWorkout] = useState({
    userId: localStorage.getItem("userId"),
    name: "",
    date: moment(Date.now()).format("l")
  });
  //need to push the workoutName to workout object in API

  const inputHandler = e => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };
  // console.log("workout", workout);

  return (
    <div className="NameWorkoutTop">
      <div className="NameWorkoutContainer">
        <div className="name-workout-card">
          <NavLink className="xbutton" to="/WorkoutList">
            {" "}
            <img src={X} alt="An x icon"/>{" "}
          </NavLink>
          <h2>Name your workout</h2>
          <div className="bottompartcard">
            <input
              className="typeworkout"
              type="text"
              name="name"
              value={workout.name}
              placeholder="Type Something"
              onChange={inputHandler}
            />
            <button
              className="next-btn"
              onClick={() => {
                if (localStorage.getItem("journalId")) {
                  props.editWorkoutName(workout);
                  console.log("next props", props);
                  props.history.push("/WorkoutList");
                } else {
                  props.makeWorkout(workout);
                  props.history.push("/ExerciseList");
                }
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
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
  { makeWorkout, editWorkoutName }
)(NameWorkout);
