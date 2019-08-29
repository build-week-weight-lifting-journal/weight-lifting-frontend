import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { Image } from 'semantic-ui-react';
import WorkoutCard from "./WorkoutCard";
import "../WorkoutList.scss";
import logoAdd from '../images/Add.png';
import { getWorkoutsData, getSets, deleteSetsAndWorkout, deleteWorkout } from "../actions/index"

//dummy data
// const workoutstate = [
//   { id: 1, name: "Arm Day", date: "08/26/2019" },
//   { id: 2, name: "Back Day", date: "02/20/2019" },
//   { id: 3, name: "Quad Day", date: "02/25/2019" },
//   { id: 4, name: "Brain Day", date: "05/25/2019" },
//   { id: 5, name: "Leg Day", date: "06/27/2019" }
// ];

const WorkoutList = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    props.getWorkoutsData();
  }, [])

  return (
    <div className="workout-list">
      <div className="workout-gradient">
        {/* <span class="dot"></span> */}
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
        {/* {search
          ? workoutstate.map(workout => {
              if (workout.date.includes(search)) {
                return <WorkoutCard key={workout.id} workout={workout} />;
              }
            })
          : workoutstate.map(workout => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))} */}

    

        {search
          ? props.workoutArray && props.workoutArray.map(workout => {
              if (props.workoutArray.date.includes(search)) {
                return <WorkoutCard key={workout.id} workout={workout} props={props}/>;
              }
            })
          : props.workoutArray && props.workoutArray.map(workout => (
              <WorkoutCard key={workout.id} workout={workout} props={props}/>
            ))}
      </div>
            <div className="add-workout-card-button"><NavLink className="plus-button"  exact to="/NameWorkout"><Image src={logoAdd} onClick={() => localStorage.removeItem("journalId")}/></NavLink></div>
    </div>
  );
};



const mapStateToProps = state => {
  return {
    workoutArray: state.workouts.workoutArray,
    setsArray: state.workouts.setsArray
  };
};

export default connect(
  mapStateToProps,
  { getWorkoutsData, getSets, deleteSetsAndWorkout, deleteWorkout }
)(WorkoutList);
