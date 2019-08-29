import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getExerciseData } from "../actions/index";
import "../ExerciseList.scss";

const ExerciseList = props => {
  useEffect(() => {
    props.getExerciseData();
  }, []);

  // const exerciseObject = {
  //   weight: "",
  //   reps: 0,
  //   sets: 0,
  //   journalId: props.journalId,
  //   exerciseId: 0,
  // }

  // console.log(exerciseObject)

  return (
    <div>
      <div className="bodyNav">
        <Link to="/WorkoutList">
          <p>Cancel</p>
        </Link>
        <p>Add Exercises</p>
        <Link to="/RepSets">
          <p>Save</p>
        </Link>
      </div>

      <div className="exercise-list-container">
        {props.exercises &&
          props.exercises.map((exercise, index) => (
            <button
              className="exercises"
              key={index}
              onClick={() => console.log(exercise)}
            >
              {exercise.name}
            </button>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    exercises: state.exercise.exercises,
    exerciseIsLoading: state.exercise.exerciseIsLoading,
    exerciseObj: state.exercise.exerciseObj,
    userId: state.login.userId
    // journalId: state.nameWorkout.journalId
  };
};

export default connect(
  mapStateToProps,
  { getExerciseData }
)(ExerciseList);
