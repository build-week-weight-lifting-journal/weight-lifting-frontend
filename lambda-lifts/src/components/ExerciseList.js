import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PulseSpinner } from "react-spinners-kit";
import { getExerciseData } from "../actions/index";


const ExerciseList = (props) => {

  return (
    <div>
      <div className="bodyNav">
        <Link to="/WorkoutList"><p>Cancel</p></Link>
        <p>Add Exercises</p>
        <Link to="/"><p>Save</p></Link>
      </div>
      
      <div className="friends-btn" onClick={props.getExerciseData}>
        {props.exerciseIsLoading ? (
          <button><PulseSpinner size={30}
          color="#686769"
          loading={props.exerciseIsLoading}
          /></button>
        ) : (
          <button>Get Exercises</button>
        )}
      </div>

      <div>
        {props.exercises && props.exercises.map((exercise, index) => <button key={index}>{exercise.name}</button>)}
      </div>

    </div>
  );
};

const mapStateToProps = state => {
  return {
      exercises: state.exercise.exercises, 
      exerciseIsLoading: state.exercise.exerciseIsLoading,
      exerciseId: state.exercise.exerciseId,
      userId: state.login.userId
      };
  };
  
  export default connect(
      mapStateToProps,
      { getExerciseData }
)(ExerciseList);