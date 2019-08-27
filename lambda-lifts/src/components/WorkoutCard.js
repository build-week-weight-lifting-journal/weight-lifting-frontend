import React from "react";
import moment from "moment";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-card">
      <h2>
        {workout.name} - {moment(workout.date).format("l")}
      </h2>
    </div>
  );
};

export default WorkoutCard;
