import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../../service/action/authAction"
import { loadings, notLoading } from "../../../service/action/loadingAction"
import { loginSchema } from "../../validation"
import ErrorText from "../../validation/errorText"
import './auth.css'
const Login = () => {
    const loading = useSelector(state => state.loading)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submit = (values) => {
        dispatch(login(values))
        dispatch(loadings())
        setTimeout(() => {
            dispatch(notLoading())
            navigate("/home")
        }, 1000);

    }

    const data = {
        email: "",
        password: "",
    }

    if(loading){
        return <h3>Loading ...</h3>
    }
    return (

            <div
            className="container"
            >
                <h1>Login</h1>

                <Formik
                    initialValues={data}
                    onSubmit={(values) => {
                        submit(values)
                    }}
                    validationSchema={loginSchema}
                >
                    <Form>
                        <label>Email:</label><br />
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage component={ErrorText} name="email" />
                        <br />
                        <label>Password:</label><br />
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage component={ErrorText} name="password" />
                        <br />
                        <Field type="submit" value="Login" />
                        <br />
                        <p>already have an account? <Link to="/register" >Signup</Link> </p>
                    </Form>
                </Formik>
        </div>
    )
}

export default Login