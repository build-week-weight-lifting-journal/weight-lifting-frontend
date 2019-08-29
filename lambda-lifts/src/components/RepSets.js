import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { updateWorkoutData } from "../actions/exerciseAction";
import Check from "../images/Check.png";

const RepWeight = props => {
  const [form, setForm] = useState({
    sets: "",
    reps: "",
    weight: "",
    journalId: Number.parseInt(localStorage.getItem("journalId")),
    exerciseId: Number.parseInt(localStorage.getItem("exerciseId"))
  });

  const changehandler = event => {
    if (event.target.name === "weight") {
      setForm({ ...form, [event.target.name]: event.target.value });
    } else {
      setForm({
        ...form,
        [event.target.name]: Number.parseInt(event.target.value)
      });
    }
  };

  // console.log(form);

  const submitForm = event => {
    event.preventDefault();
    props.updateWorkoutData(form);
  };

  return (
    <div className="container">
      <div className="nav">
        <NavLink to="/WorkoutList" className="navlink">
          {" "}
          Cancel{" "}
        </NavLink>
        <h2> Add Exercises </h2>
        <NavLink to="/WorkoutList" className="navlink">
          {" "}
          Save{" "}
        </NavLink>
      </div>
      <div className="workoutname">
        <h1>ADD Workout Name Functionality</h1>
      </div>

      <form className="repweight">
        <label htmlFor="Sets">
          {" "}
          <h2>Sets:</h2>{" "}
        </label>
        <input
          className="input"
          name="sets"
          type="number"
          value={form.sets}
          onChange={changehandler}
        />

        <label htmlFor="Reps">
          {" "}
          <h2>Reps:</h2>{" "}
        </label>
        <input
          className="input"
          name="reps"
          type="number"
          value={form.reps}
          onChange={changehandler}
        />
        <label htmlFor="Weight">
          {" "}
          <h2>Weight:</h2>{" "}
        </label>
        <input
          className="input"
          name="weight"
          type="text"
          value={form.weight}
          onChange={changehandler}
        />
        <div className="navlinkcheck">
          {" "}
          <button
            type="button"
            onClick={event => {
              submitForm(event);
              props.history.push("/WorkoutList");
            }}
          >
            <img src={Check} />
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    exerciseObj: state.exercise.exerciseObj
  };
};

export default connect(
  mapStateToProps,
  { updateWorkoutData }
)(RepWeight);

// const RepWeight = () => {
//     // const [reps, setReps] = useState(0);
//     // const [weight, setWeight] = useState(0);

//     return(
//         <div className="repweight">
//             <Form>
//                 <div className="bothinputs">
//                     <div className="input">
//                         <h2>Reps</h2>
//                         <Field className="fieldinput" type="text" name="repinput" />
//                     </div>

//                     <div className="input">
//                         <h2>Weight</h2>
//                         <Field className="fieldinput" type="text" name="weightinput"/>
//                     </div>
//                 </div>
//                 <NavLink type="submit"> <img src={Check}/> </NavLink>
//             </Form>
//         </div>
//     )
// }

// const FormikRepWeightForm = withFormik({
//     mapPropsToValues({repinput, weightinput}) {
//     return {
//         repinput: repinput || "",
//         weightinput: weightinput || ""
//     };
// },
// }) (RepWeight);

// export default FormikRepWeightForm;
