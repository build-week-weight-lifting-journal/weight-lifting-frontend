<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik';
import axios from 'axios'
import * as Yup from 'yup';

const SignUpForm = ({errors, touched, values, status}) => {
    const [users, setUsers] = useState([])

    // useEffect(() => {
    //     setUsers([...users, status])
    // }, [status])

    return(
        <div className="form">
            <Form>
                <Field className="field-input" type="text" name="firstname" placeholder="firstname"/>
                {
                    touched.firstname && errors.firstname &&(
                        <p>{errors.firstname}</p>
                    )
                }

                <Field className="field-input" type="text" name="lastname" placeholder="lastname"/>
                {
                    touched.lastname && errors.lastname &&(
                        <p>{errors.lastname}</p>
                    )
                }
            

                <Field className="field-input" type="text" name="email" placeholder="email"/>
                {
                    touched.email && errors.email &&(
                        <p>{errors.email}</p>
                    )
                }

                <Field className="field-input" type="text" name="password" placeholder="password"/>
                {
                    touched.password && errors.password &&(
                        <p>{errors.password}</p>
                    )
                }

                <button type="submit"> Sign Up! </button>

            </Form>
        </div>
    )
}
=======
import React from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { signUp } from "../actions";
import * as Yup from "yup";

const SignUpForm = ({ errors, touched }) => {
  return (
    <div>
      <Form>
        <Field type="text" name="firstName" placeholder="First Name" />
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}

        <Field type="text" name="lastName" placeholder="Last Name" />
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <button type="submit"> Sign Up! </button>
      </Form>
    </div>
  );
};
>>>>>>> dbf7b8be2c57b752570059857cb46447f453766e

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
