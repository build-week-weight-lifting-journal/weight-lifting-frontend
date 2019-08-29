import React, { useState, useEffect } from "react";
import moment from "moment";
import OpenCarrot from "../images/Carrot-open.png";
import ClosedCarrot from "../images/Carrot-closed.png";
import "../WorkoutCard.scss";
import Delete from "../images/Delete.png";
import Add from "../images/Add.png";

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

  // onDoubleClick={() => {console.log("enter", workout); deleteCard(); setDeleted(true); timedRefresh(2000)}}
  console.log(workout);
  return (
    <div className="workout-card">
      <div className="workout-header">
        <h2>
          {workout.name} - {moment(workout.date).format("l")}
        </h2>
        {open ? (
          <div className="carrot">
            <img
              src={Add}
              onClick={() => {
                localStorage.setItem("journalId", workout.id);
                props.history.push("/ExerciseList");
              }}
            />

            <img
              src={Delete}
              onClick={() => {
                console.log("enter", workout);
                deleteCard();
                setDeleted(true);
                timedRefresh(1000);
              }}
            />
            <img src={OpenCarrot} onClick={toggleOpen} />
          </div>
        ) : (
          <div className="carrot">
            <img
              src={Add}
              onClick={() => {
                localStorage.setItem("journalId", workout.id);
                props.history.push("/ExerciseList");
              }}
            />
            <img
              src={Delete}
              onClick={() => {
                console.log("enter", workout);
                deleteCard();
                setDeleted(true);
                timedRefresh(1000);
              }}
            />
            <img src={ClosedCarrot} onClick={toggleOpen} className="carrot" />
          </div>
        )}
      </div>
      {open &&
        array.map((exercise, index) => {
          return (
            <div className="workout-exercise" key={index}>
              {" "}
              {exercise.name}
              <div>
                Weight:{exercise.weight} Reps:{exercise.reps} Sets:
                {exercise.sets}
              </div>
              <button
                onClick={() => {
                  console.log("exercise", exercise)
                  localStorage.setItem("jouExeId", exercise.id)
                  localStorage.setItem("journalId", exercise.journalId)
                  localStorage.setItem("exerciseId", exercise.exerciseId)
                  props.history.push("/RepSets")
                 
                }}
              >Edit</button>
              <img
                src={Delete}
                onClick={() => {
                  props.deleteWorkout(exercise.id);
                  timedRefresh(1000);
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default WorkoutCard;
