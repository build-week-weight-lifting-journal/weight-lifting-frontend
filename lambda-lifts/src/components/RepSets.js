import React, {useState} from 'react';
import { Form, Field, withFormik } from "formik";
import {NavLink} from 'react-router-dom';
import Check from '../images/Check.png';


const RepWeight = () => {
    // const [reps, setReps] = useState(0);
    // const [weight, setWeight] = useState(0);

    return(
        <div className="repweight">
            <Form>
                <div className="bothinputs">
                    <div className="input">
                        <h2>Reps</h2>
                        <Field className="fieldinput" type="text" name="repinput" />
                    </div>
                    
                    <div className="input">
                        <h2>Weight</h2>
                        <Field className="fieldinput" type="text" name="weightinput"/>
                    </div>
                </div>
                <NavLink type="submit"> <img src={Check}/> </NavLink>
            </Form>
        </div>
    )
}

const FormikRepWeightForm = withFormik({
    mapPropsToValues({repinput, weightinput}) {
    return {
        repinput: repinput || "",
        weightinput: weightinput || ""
    };
},
}) (RepWeight);

export default FormikRepWeightForm;