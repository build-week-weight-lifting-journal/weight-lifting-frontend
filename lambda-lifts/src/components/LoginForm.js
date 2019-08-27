import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { Button, Image, Grid, Divider, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import * as Yup from "yup";
import logo from '../images/Logo.png';
import logoPassword from '../images/password2.png';
import logoEmail from '../images/Email2.png';


const LoginForm = ({ errors, touched, values, status })  =>{

const [login, setLogin] = useState([]);

// console.log(errors);

// useEffect(() => {
//     if(status) {
//         setLogin([...login, status]);
//     }
// },[status]);



    return(
        <div className="login-form">
            <Form>
                <div className="image-div">
                <div id="circle1"></div>
                <Image className="login-logo" src={logo} alt="Lambda Lift logo" wraped/>
                <div id="circle2"></div>
                </div>
                <div className="email-input"><Image src={logoEmail} alt="email envelope"/>
                <Field className="field-input" name="email" type="text" placeholder="E-mail" />
                {touched.email && <errors className="email"></errors> && (
                    <p className="error">{errors.email}</p>
                )}
                </div>
                <div className="password-input"><Image src={logoPassword} alt="password lock"/>
                <Field className="field-input" name="password" type="password" placeholder="Password"  />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                </div>
                <Button className="login-button" type="submit" >LOGIN</Button>
                <Segment>
                    <Grid columns={2} realxed='very'>
                    <Grid.Column>
                <NavLink exact to={`/SignUpForm`}>Create Account</NavLink>
                </Grid.Column>
                                <Divider vertical>Or</Divider>

                <Grid.Column>
                <NavLink exact to={`/ErrorPage`} >Forgot Password</NavLink>
                </Grid.Column>
                </Grid>
                </Segment>
            </Form>
                
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