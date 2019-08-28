import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PulseSpinner } from "react-spinners-kit";
import { getExerciseData, addSelectedExercises } from "../actions/index";


const ExerciseList = (props) => {
  return (
    <div>
      <div className="bodyNav">
        <Link to="/Dashboard"><p>Cancel</p></Link>
        <p>Add Exercises</p>
        <Link to="/"><p>Save</p></Link>
      </div>

      <button onClick={props.getExerciseData}>Click me!</button>
      
      {console.log(props.exercises)}

      <div>
        {/* {props.exerciseIsLoading ? (
          <div className="body-loading">
            <PulseSpinner size={30}
            color="#686769"
            loading={props.exerciseIsLoading}
            />
          </div>
        ) : (
          <div className="body-categories-container">
           {props.exercises.map((category, index)=> <button key={index} onClick={props.addSelectedExercises(category)}>{category}</button>)}
          </div>
        )} */}
      </div>

    </div>
  );
};

const mapStateToProps = state => {
  return {
      exercises: state.exercises, 
      exerciseIsLoading: state.exerciseIsLoading,
      selectedExercises: state.selectedExercises,
      };
  };
  
  export default connect(
      mapStateToProps,
      { getExerciseData, addSelectedExercises }
)(ExerciseList);