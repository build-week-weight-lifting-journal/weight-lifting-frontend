import React, { useState } from "react";
import moment from "moment";
import OpenCarrot from "../images/Carrot-open.png";
import ClosedCarrot from "../images/Carrot-closed.png";

import "../WorkoutCard.scss";

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
      <div className="workout-header">
        <h2>
          {workout.name} - {moment(workout.date).format("l")}
        </h2>
        {open ? (
          <div className="carrot">
            <img src={OpenCarrot} onClick={toggleOpen} />
          </div>
        ) : (
          <div className="carrot">
            <img src={ClosedCarrot} onClick={toggleOpen} className="carrot" />
          </div>
        )}
      </div>
      {open &&
        exercises.map((exercise, index) => (
          <div className="workout-exercise" key={index}>{exercise.name}</div>
        ))}
    </div>
  );
};

export default WorkoutCard;
