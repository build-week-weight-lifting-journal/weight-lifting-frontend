import React from "react";
import moment from "moment";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-card">
      <h2>
        {workout.name} - {moment(Date.now()).format("l")}
      </h2>
      Test Date: {workout.date}
    </div>
  );
};

export default WorkoutCard;
