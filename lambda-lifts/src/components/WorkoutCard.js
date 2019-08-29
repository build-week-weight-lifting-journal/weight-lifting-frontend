import React, { useState, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import OpenCarrot from "../images/Carrot-open.png";
import ClosedCarrot from "../images/Carrot-closed.png";
import { getSets } from "../actions/index";
import "../WorkoutCard.scss";

// axios with authorization
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

//dummy data
const exercises = [
  { name: "Dumbbell Curl" },
  { name: "Hammer Curl" },
  { name: "Tricep Extensions" },
  { name: "Tricep Pushdown" }
];

const WorkoutCard = ({ workout, props }) => {
  
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState([]);
  const [deleted, setDeleted] = useState(false)

  const toggleOpen = () => {
    setOpen(!open);
  };

  const deleteCard= () => {
    props.deleteSetsAndWorkout(workout.id)
  }

  useEffect(() => {
    axiosWithAuth() 
    .get(`https://backend-buildweek-wlj-mack.herokuapp.com/api/journals/exercises/${workout.userId}/${workout.id}`)

    .then(response => {
      // console.log("response data", response.data.item)  
      setArray(response.data.item)
    })

    .catch(error => {
      console.log(error)
    })
    setDeleted(false)
  }, [deleted]);

  

  return (
    <div className="workout-card" onDoubleClick={() => {console.log("enter", workout); deleteCard(); setDeleted(true)}}>
      <div className="workout-header" >
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
         array.map((exercise, index) => {
          return (<div className="workout-exercise" key={index}>{exercise.name}</div>)
        })}
    </div>
  );
};

export default WorkoutCard

// const mapStateToProps = state => {
//   return {
//     setsArray: state.workouts.setsArray
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getSets }
// )(WorkoutCard);
