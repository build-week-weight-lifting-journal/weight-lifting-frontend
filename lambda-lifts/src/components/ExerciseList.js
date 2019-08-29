import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getExerciseData, deleteWorkout, postExercise } from "../actions/index";
import "../ExerciseList.scss";

const ExerciseList = props => {
  const [exerciseObject, setExerciseObj] = useState({
    weight: "100kg",
    reps: 10,
    sets: 10
  });

  const [search, setSearch] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);

  const [list, setList] = useState([]);

  const searchHandler = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    localStorage.getItem("journalId")
      ? setExerciseObj({
          ...exerciseObject,
          ["journalId"]: localStorage.getItem("journalId")
        })
      : setExerciseObj({
          ...exerciseObject
        });
  }, [localStorage.getItem("journalId")]);

  useEffect(() => {
    props.getExerciseData();
  }, []);

  return (
    <div>
      <div className="nav-container">
        <div className="exercise-nav">
          <Link to="/WorkoutList">
            <p onClick={props.deleteWorkout}>Cancel</p>
          </Link>
          <p id="add-exercises">Add Exercises</p>

          <p
            onClick={() => {
              console.log("exercise object", exerciseObject);
              props.postExercise(exerciseObject);
            }}
          >
            <Link to="/RepSets">Save</Link>
          </p>
        </div>
      </div>

      <div>
        <form className="exercise-form">
          <input
            type="text"
            name="search"
            className="exercise-search"
            onChange={searchHandler}
            placeholder="Search Exercise"
          />
        </form>
      </div>
      <div className="exercise-list-container">
        {search
          ? props.exercises &&
            props.exercises.map((exercise, index) => {
              if (exercise.name.toLowerCase().includes(search)) {
                return (
                  <button
                    className={`exercises`}
                    key={index}
                    style={{
                      background:
                        selectedExercise === exercise.name
                          ? "#fe6b6b"
                          : "white",
                      color:
                        selectedExercise === exercise.name ? "white" : "#fe6b6b"
                    }}
                    onClick={() => {
                      setExerciseObj({
                        ...exerciseObject,
                        ["exerciseId"]: exercise.id
                      });
                      localStorage.setItem("exerciseId", exercise.id);
                    }}
                  >
                    {exercise.name}
                  </button>
                );
              }
            })
          : props.exercises &&
            props.exercises.map((exercise, index) => (
              <button
                className={`exercises`}
                key={index}
                style={{
                  background:
                    selectedExercise === exercise.name ? "#fe6b6b" : "white",
                  color:
                    selectedExercise === exercise.name ? "white" : "#fe6b6b"
                }}
                onClick={() => {
                  setExerciseObj({
                    ...exerciseObject,
                    ["exerciseId"]: exercise.id
                  });
                  localStorage.setItem("exerciseId", exercise.id);
                  setSelectedExercise(exercise.name);
                }}
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
    exerciseObj: state.exercise.exerciseObj
  };
};

export default connect(
  mapStateToProps,
  { getExerciseData, deleteWorkout, postExercise }
)(ExerciseList);
