import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


const LoginForm = ({ errors, touched, values, status })  =>{

const [login, setLogin] = useState([]);

console.log(errors);

// useEffect(() => {
//     if(status) {
//         setLogin([...login, status]);
//     }
// },[status]);



    return(
        <div className="login-form">
            <Form>
                <Field className="field-input" name="email" type="text" placeholder="Email" />
                {touched.email && <errors className="email"></errors> && (
                    <p className="error">{errors.email}</p>
                )}
                <Field className="field-input" name="password" type="password" placeholder="Password"  />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <button type="submit" >LOGIN RIGHT HERE</button>
            </Form>
            
            {login.map(getIt => (
                <div className="title-container">
                <ul key={getIt.id}>
                <h2>Welcome</h2>
                <li>Email: {getIt.email}</li>
                </ul>
                </div>
            ))}
            
        </div>
    );
};

const FormikLoginForm = withFormik({
    mapsPropsToValues({ 
        email,
        password
    }) {
        return{ 
            password: password || "",
            email: email || "",
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Now a User Name; Got to have this to be a user"),
        password: Yup.string().required("& last a Password Need this to keep this secure"),
    }),
    handleSubmit(values, {setStatus}) {
        axios.post("https://reqres.in/api/users/", values)
        .then(res => {
            console.log(res);
            setStatus(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

})(LoginForm);

export default FormikLoginForm;