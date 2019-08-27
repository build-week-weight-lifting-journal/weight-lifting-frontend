import React, { useState } from "react";
import WorkoutCard from "./WorkoutCard";

//dummy data
const workoutstate = [
  { id: 1, name: "leg workout", date: "03/25/2018" },
  { id: 2, name: "back workout", date: "02/20/2019" },
  { id: 3, name: "quad workout", date: "02/25/2019" },
  { id: 4, name: "brain workout", date: "05/25/2019" },
  { id: 5, name: "arm workout", date: "06/27/2019" }
];

const WorkoutList = () => {
  const [search, setSearch] = useState("");

  const searchHandler = e => {
    setSearch(e.target.value);
  };
  console.log("search", search);
  return (
    <div className="workout-list">
      <form className="search-bar">
        <input
          type="text"
          name="search"
          onChange={searchHandler}
          placeholder="Search Date"
        />
      </form>
      {/* logic for the api - remember need to format dates*/}
      {/*if search state exists, only render cards for workouts with matching date otherwise render all*/}
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
  );
};

export default WorkoutList;
