import React, { useState, useEffect } from "react";
import moment from "moment";
import OpenCarrot from "../images/Carrot-open.png";
import ClosedCarrot from "../images/Carrot-closed.png";
import "../WorkoutCard.scss";
import Delete from "../images/Delete.png";
import Plus from "../images/Plus.png";
import Edit from "../images/Edit.png";

// axios with authorization
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

//dummy data
// const exercises = [
//   { name: "Dumbbell Curl" },
//   { name: "Hammer Curl" },
//   { name: "Tricep Extensions" },
//   { name: "Tricep Pushdown" }
// ];

const WorkoutCard = ({ workout, props }) => {
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const deleteCard = () => {
    props.deleteSetsAndWorkout(workout.id);
  };

  const timedRefresh = timeoutPeriod => {
    setTimeout("location.reload(true);", timeoutPeriod);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://backend-buildweek-wlj-mack.herokuapp.com/api/journals/exercises/${workout.userId}/${workout.id}`
      )

      .then(response => {
        // console.log("response data", response.data.item)
        setArray(response.data.item);
      })

      .catch(error => {
        console.log(error);
      });
    setDeleted(false);
  }, [deleted]);

  return (
    <div className="workout-card">
      <div className="workout-header">
        <div className="name-date-edit">
          <div className="name-edit">
          <h2>
            {workout.name} - {moment(workout.date).format("l")}
          </h2>
          <img
            src={Edit}
            alt="Edit icon"
            className="icons-name"
            onClick={() => {
              localStorage.setItem("journalId", workout.id);
              props.history.push("/NameWorkout");
            }}
          />
          </div>
          <div className="spacer"></div>
        </div>
        {open ? (
          <div className="carrot">
            <img
              src={Plus}
              alt="Plus icon"
              className="icons"
              onClick={() => {
                localStorage.setItem("journalId", workout.id);
                props.history.push("/ExerciseList");
              }}
            />

            <img
              src={Delete}
              alt="Delete icon"
              className="icons"
              onClick={() => {
                console.log("enter", workout);
                deleteCard();
                setDeleted(true);
                timedRefresh(1000);
              }}
            />
            <img src={OpenCarrot} alt="Open carrot icon" className="icons-carrot" onClick={toggleOpen} />
          </div>
        ) : (
          <div className="carrot">
            <img
              src={Plus}
              className="icons"
              alt="Plus icon"
              onClick={() => {
                localStorage.setItem("journalId", workout.id);
                props.history.push("/ExerciseList");
              }}
            />
            <img
              src={Delete}
              alt="Delete icon"
              className="icons"
              onClick={() => {
                console.log("enter", workout);
                deleteCard();
                setDeleted(true);
                timedRefresh(1000);
              }}
            />
            <img
              src={ClosedCarrot}
              alt="Closed icon"
              className="icons-carrot"
              onClick={toggleOpen}
            />
          </div>
        )}
      </div>
      {open &&
        array.map((exercise, index) => {
          return (
            <div className="workout-exercise" key={index}>
              
              <div className="workout-text-container">
                <p id="name">{exercise.name}</p>
                <p>Weight: {exercise.weight}</p> 
                <p>Reps: {exercise.reps}</p>
                <p>Sets: {exercise.sets}</p>
              </div>

              <div className="workout-icons">
                <img
                  src={Edit}
                  alt="Edit icon"
                  className="workout-icon"
                  onClick={() => {
                    console.log("exercise", exercise);
                    localStorage.setItem("jouExeId", exercise.id);
                    localStorage.setItem("journalId", exercise.journalId);
                    localStorage.setItem("exerciseId", exercise.exerciseId);
                    props.history.push("/RepSets");
                  }}
                />
                <img
                  src={Delete}
                  alt="Delete icon"
                  className="workout-icon"
                  onClick={() => {
                    props.deleteWorkout(exercise.id);
                    timedRefresh(1000);
                  }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WorkoutCard;
