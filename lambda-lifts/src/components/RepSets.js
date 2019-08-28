import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Check from '../images/Check.png';


const RepWeight = props => {

    const [form, setForm] = useState({Reps: "", Weight: ""})

    const changehandler = event => {
        setForm({...form, [event.target.Reps]: event.target.value})
    }

    const submitForm = event =>{
        event.preventDefault();
        const newForm={
            ...form,
            id:Date.now()
        }
        props.addNewForm(newForm);
        setForm({Reps: "", Weight: ""})
    }

    return(
        <form className="repweight" onSubmit={submitForm}>
            <label htmlFor="reps"> <h2>Reps</h2> </label>
            <input
            className="input"
            name="reps"
            type="text"
            value={form.reps}
            onChange={changehandler}
            />
            <label htmlFor="weight"> <h2>Weight</h2> </label>
            <input
            className="input"
            name="weight"
            type="text"
            value={form.weight}
            onChange={changehandler}
            />
            <button type="submit"> <img src={Check} /> </button>
        </form>
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