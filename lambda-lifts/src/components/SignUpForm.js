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
        <div>
            <Form>
                <Field type="text" name="firstname" placeholder="firstname"/>
                {
                    touched.firstname && errors.firstname &&(
                        <p>{errors.firstname}</p>
                    )
                }

                <Field type="text" name="lastname" placeholder="lastname"/>
                {
                    touched.lastname && errors.lastname &&(
                        <p>{errors.lastname}</p>
                    )
                }
            

                <Field type="text" name="email" placeholder="email"/>
                {
                    touched.email && errors.email &&(
                        <p>{errors.email}</p>
                    )
                }

                <Field type="text" name="password" placeholder="password"/>
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

const FormikForm = withFormik({
    mapPropsToValues({firstname, lastname, email, username, password}){
        return{
            firstname: firstname || '',
            lastname: lastname || '',
            email: email || '',
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        firstname: Yup.string().required("First name is required"),
        lastname: Yup.string().required("Last name is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("password is required")
    }),

    // handleSubmit(values, {setStatus}) {
    //     axios.post('https://reqres.in/api/users', values)
    //     .then(response =>{
    //         setStatus(response.data);
    //         console.log(response.data);
    //         console.log(setStatus);
    //     })
    // }

}) (SignUpForm);

export default FormikForm;