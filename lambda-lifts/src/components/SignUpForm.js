import React from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { signUp } from "../actions";
import { Button, Image } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import * as Yup from "yup";
import logo from '../images/Logo.png'

const SignUpForm = ({ errors, touched }) => {
  return (
    <div className="signupform">
      <div className='image-div'>
        <Image src={logo} />
      </div>
      <Form>
        <div className="input">
          <Field className="fieldinput" type="text" name="firstName" placeholder="First Name" />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        </div> 

        <div className="input">
          <Field className="fieldinput" type="text" name="lastName" placeholder="Last Name" />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div className="input">
          <Field className="fieldinput" type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>

        <div className="input">
        <Field className="fieldinput" type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit"> Sign Up! </button>
      </Form>
      <NavLink exact to={`/`}>
        <button to="/"className="goback" type="submit"> Login </button>
      </NavLink>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("password is required")
  }),

  handleSubmit(values, { resetForm, props }) {
    props.signUp(values);
    resetForm();
  }
})(SignUpForm);

export default connect(
  null,
  { signUp }
)(FormikForm);
