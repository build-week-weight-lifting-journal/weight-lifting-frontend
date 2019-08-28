import React, { useState } from "react";
import WorkoutCard from "./WorkoutCard";
import "../WorkoutList.scss";

//dummy data
const workoutstate = [
  { id: 1, name: "Arm Day", date: "08/26/2019" },
  { id: 2, name: "Back Day", date: "02/20/2019" },
  { id: 3, name: "Quad Day", date: "02/25/2019" },
  { id: 4, name: "Brain Day", date: "05/25/2019" },
  { id: 5, name: "Leg Day", date: "06/27/2019" }
];

const WorkoutList = () => {
  const [search, setSearch] = useState("");

  const searchHandler = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="workout-list">
      <div className="workout-gradient">
        <span class="dot"></span>
        <h1>My Workouts</h1>
        <form className="search-bar">
          <input
            type="text"
            name="search"
            onChange={searchHandler}
            placeholder="Search Date"
          />
        </form>
      </div>
      {/* logic for the api - remember need to format dates*/}
      {/*if search state exists, only render cards for workouts with matching date otherwise render all*/}
      <div className="exercise-list">
        {search
          ? workoutstate.map(workout => {
              if (workout.date.includes(search)) {
                return <WorkoutCard key={workout.id} workout={workout} />;
              }
            })
          : workoutstate.map(workout => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
      </div>
    </div>
  );
};

export default WorkoutList;
