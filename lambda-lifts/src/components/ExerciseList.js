import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getExerciseData } from "../actions/index";

const ExerciseList = (props) => {

  useEffect(() => {
    props.getExerciseData()
  }, [])
  
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
        <Link to="/Dashboard"><p>Cancel</p></Link>
        <p>Add Exercises</p>
        <Link to="/"><p>Save</p></Link>
      </div>

      <div>
        {props.exercises && props.exercises.map((exercise, index) => <button key={index} onClick={() => console.log(exercise)}>{exercise.name}</button>
        )}
      </div>

    </div>
  );
};

const mapStateToProps = state => {
  return {
      exercises: state.exercise.exercises, 
      exerciseIsLoading: state.exercise.exerciseIsLoading,
      exerciseObj: state.exercise.exerciseObj,
      userId: state.login.userId,
      // journalId: state.nameWorkout.journalId
    };
};
  
export default connect(
  mapStateToProps,
    { getExerciseData }
)(ExerciseList);