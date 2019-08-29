import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getExerciseData, deleteWorkout, postExercise } from "../actions/index";
import "../ExerciseList.scss";

const ExerciseList = (props) => {

  const [exerciseObject, setExerciseObj] = useState({}) 


  useEffect(() => {
    props.getExerciseData()

    setExerciseObj({...props.exerciseObj, ["journalId"]: Number.parseInt(localStorage.getItem("journalId"))})
    
  }, [])

  return (
    <div>
      <div className="bodyNav">
        <Link to="/WorkoutList"><p onClick={props.deleteWorkout}>Cancel</p></Link>
        <p>Add Exercises</p>
        <Link to="/RepSets"><p onClick={() => props.postExercise(exerciseObject)}>Save</p></Link>
      </div>

      <div className="exercise-list-container">
        {props.exercises && props.exercises.map((exercise, index) => <button className="exercises" key={index} onClick={() => {
          setExerciseObj({...exerciseObject, ["exerciseId"]: exercise.id})
          
          localStorage.setItem("exerciseId", exercise.id)

        }}>{exercise.name}</button>
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
    };
};
  
export default connect(
  mapStateToProps,
    { getExerciseData, deleteWorkout, postExercise }
)(ExerciseList);