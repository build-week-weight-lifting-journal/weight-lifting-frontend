import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getExerciseData, deleteWorkout } from "../actions/index";
import "../ExerciseList.scss";

const ExerciseList = (props) => {

  const [exerciseObject, setExerciseObj] = useState({}) 


  useEffect(() => {
    props.getExerciseData()

    setExerciseObj({...props.exerciseObj, ["journalId"]: localStorage.getItem("journalId")})
    
  }, [])

  // console.log("journal id", props.journalId, "journal", journal)
  
  // const exerciseObject = {
  //   weight: "", 
  //   reps: 0, 
  //   sets: 0,
  //   journalId: props.journalId,
  //   exerciseId: 0,
  // }

  console.log("exercise object", exerciseObject)

  return (
    <div>
      <div className="bodyNav">
        <Link to="/WorkoutList"><p onClick={props.deleteWorkout}>Cancel</p></Link>
        <p>Add Exercises</p>
        <Link to="/"><p>Save</p></Link>
      </div>

      <div className="exercise-list-container">
        {props.exercises && props.exercises.map((exercise, index) => <button className="exercises" key={index} onClick={() => console.log(exercise)}>{exercise.name}</button>
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
    { getExerciseData, deleteWorkout }
)(ExerciseList);