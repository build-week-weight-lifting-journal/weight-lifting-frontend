import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { Button } from 'semantic-ui-react';
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
                <Button type="submit" >LOGIN RIGHT HERE</Button>
                <div className="other-buttons">
                <Button >Create Account</Button>
                <Button >Forgot Password</Button>
                </div>
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
            email: email || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Your email is required for an account"),
        password: Yup.string().required("A password is required for the privacy of your acccount, and a different password different from your email account is recommended"),
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