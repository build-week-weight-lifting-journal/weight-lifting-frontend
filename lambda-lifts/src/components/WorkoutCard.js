import React, { useState } from "react";
import moment from "moment";
import OpenCarrot from "../images/Carrot-open.png";
import ClosedCarrot from "../images/Carrot-closed.png";

//dummy data
const exercises = [
  { name: "Dumbbell Curl" },
  { name: "Hammer Curl" },
  { name: "Tricep Extensions" },
  { name: "Tricep Pushdown" }
];

const WorkoutCard = ({ workout }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="workout-card">
      <div className="workout-card header">
        <h2>
          {workout.name} - {moment(workout.date).format("l")}
        </h2>
        {open ? (
          <img src={OpenCarrot} onClick={toggleOpen} />
        ) : (
          <img src={ClosedCarrot} onClick={toggleOpen} />
        )}
      </div>
      {open &&
        exercises.map(exercise => (
          <div className="workout-card exercise">{exercise.name}</div>
        ))}
    </div>
  );
};

export default WorkoutCard;
