import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Check from '../images/Check.png';


const RepWeight = props => {

    const [form, setForm] = useState({Sets: "", Reps: "", Weight: ""})

    const changehandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submitForm = event =>{
        event.preventDefault();
        console.log(form);
    }

    return(
        <div className="container">
            <div className="nav">
                <NavLink  exact to="/WorkoutList" className="navlink"> Cancel </NavLink>
                <h2> Add Exercises </h2>
                <NavLink className="navlink"> Save </NavLink>
            </div>
        <div className="workoutname">
            <h1>ADD Workout Name Functionality</h1>
        </div>

        <form className="repweight" onSubmit={submitForm}>
            <label htmlFor="Sets"> <h2>Sets:</h2> </label>
            <input
            className="input"
            name="Sets"
            type="text"
            value={form.Sets}
            onChange={changehandler}
            />

            <label htmlFor="Reps"> <h2>Reps:</h2> </label>
            <input
            className="input"
            name="Reps"
            type="text"
            value={form.Reps}
            onChange={changehandler}
            />
            <label htmlFor="Weight"> <h2>Weight:</h2> </label>
            <input
            className="input"
            name="Weight"
            type="text"
            value={form.Weight}
            onChange={changehandler}
            />
            
        </form>
        <div className="navlinkcheck">
        <NavLink> <img src={Check}/> </NavLink>
        </div>
        </div>
    )
}

export default RepWeight;












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