import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { Button, Image, Grid, Divider, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import * as Yup from "yup";
import logo from '../images/Logo.png';
import logoPassword from '../images/password2.png';
import logoEmail from '../images/Email2.png';

// use redux 
import { connect } from 'react-redux';

// axios post action 
import { postLoginData } from '../actions/index.js';
import Dashboard from './Dashboard';


const LoginForm = ({ errors, touched, values, handleSubmit, status, props})  =>{

    const [login, setLogin] = useState({});

    useEffect(() => {
        if(status) {
            setLogin(user => ({...login, user}));
        }
    }, [status]);

    return(
        <div className="login-form">
            <Form className="form-container">
                <div className="image-div">
                    <div id="circle1"></div>
                    <Image className="login-logo" src={logo} alt="Lambda Lift logo" wraped/>
                    <div id="circle2"></div>
                </div>

                <div className="email-input"><Image src={logoEmail} alt="email envelope"/>
                    <Field 
                        className="field-input" 
                        name="email" 
                        type="text" 
                        placeholder="E-mail" />
                    {touched.email && <errors className="email"></errors> && (
                        <p className="error">{errors.email}</p>
                    )}
                </div>

                <div className="password-input"><Image src={logoPassword} alt="password lock"/>
                    <Field 
                        className="field-input" 
                        name="password" 
                        type="password" 
                        placeholder="Password"  />
                    {touched.password && errors.password && (
                        <p className="error">{errors.password}</p>
                    )}
                </div>

                <Button className="login-button" type="submit">LOGIN</Button>

                <Segment>
                    <Grid className="bottomlogin" columns={2} realxed='very'>
                        <Grid.Column>
                            <NavLink exact to={`/SignUpForm`}>Create Account</NavLink>
                        </Grid.Column>
                            <Divider vertical className="divider">|</Divider>
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
    mapPropsToValues({ email, password }) {
        return { 
            password: password || "",
            email: email || "",
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Now a User Name; Got to have this to be a user"),
        password: Yup.string().required("& last a Password Need this to keep this secure"),
    }),
    
    handleSubmit(values, { props, setStatus, resetForm }) {
        // axios.post("https://reqres.in/api/users/", values)
        // .then(res => {
        //     console.log(res);
        //     setStatus(res.data);
        // })
        // .catch(err => {
        //     console.log(err);
        // });

        console.log("props", props);
        console.log("values", values)

        // using login action to make the above axios call 
        props.postLoginData(values)
    }

})(LoginForm);

const mapStateToProps = state => {
    
    return {
        loginIsLoading: state.login.loginIsLoading,
        isLoggedIn: state.login.isLoggedIn,
        userId: state.login.userId,
        };
    };
    
    export default connect(
        mapStateToProps,
        { postLoginData }
)(FormikLoginForm);

// export default FormikLoginForm;