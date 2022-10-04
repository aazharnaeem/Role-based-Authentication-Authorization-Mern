import { useState } from "react"
import {useDispatch} from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../../service/action/authAction"
const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault()
        dispatch(login(data))
        setTimeout(() => {
            navigate("/home")
        }, 1000);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit} >
                <label>Email:</label>
                <br />
                <input type="email" name="email" value={data.email} onChange={(e) => changeHandler(e)} />
                <br />
                <label>Password:</label>
                <br />
                <input type="password" name="password" value={data.password} onChange={(e) => changeHandler(e)} />
                <br />
                <input type="submit" value="Login"  />
                <br />
                <p>already have an account? <Link to="/register" >Signup</Link> </p>
            </form>
        </div>
    )
}

export default Login