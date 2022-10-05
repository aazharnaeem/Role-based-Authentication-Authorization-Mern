import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { register } from "../../../service/action/authAction"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ErrorText from "../../validation/errorText"
import { registerSchema } from '../../validation'
import './auth.css'
import { loadings, notLoading } from "../../../service/action/loadingAction"

const Register = () => {

    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const submit = (value) => {
        dispatch(register(value))
        dispatch(loadings())
        setTimeout(() => {
            dispatch(notLoading())
            Navigate("/home");
        }, 1000);
    }
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    if(loading){
        return <h3>Loading ...</h3>
    }
    return (
        
        <div
            className="container"
        >
            <h1>Register</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    submit(values)
                }}
                validationSchema={registerSchema}
            >


                    <Form>
                        <label>First Name:</label><br />
                        <Field type="text" name="firstName" placeholder="First Name" />
                        <ErrorMessage component={ErrorText} name="firstName" />
                        <br />
                        <label>Last Name:</label><br />
                        <Field type="text" name="lastName" placeholder="Last Name" />
                        <ErrorMessage component={ErrorText} name="lastName" />
                        <br />
                        <label>Email:</label><br />
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage component={ErrorText} name="email" />
                        <br />
                        <label>Password:</label><br />
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage component={ErrorText} name="password" />
                        <br />
                        <label>Confirm Password:</label><br />
                        <Field type="password" name="confirmPassword" placeholder="Password" />
                        <ErrorMessage component={ErrorText} name="confirmPassword" />
                        <br />
                        <Field type="submit" value="Register" />
                        {/* <br /> */}
                        <p>already have an account? <Link to="/" >Login</Link> </p>
                    </Form>

            </Formik>
        </div>
    )
}

export default Register