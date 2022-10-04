import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { register } from "../../../service/action/authAction"



const Register =()=>{
    const [data , setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })
    const changeHandler = (e)=>{
        setData({...data , [e.target.name]:e.target.value})
    }
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const submit = (e)=>{
        e.preventDefault()
        // console.log(data)
        dispatch(register(data))

        setTimeout(() => {
            Navigate("/home")
        }, 1000);
    }
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={submit} >
                <label>First Name:</label>
                <br />
                <input type="text" name="firstName" value={data.firstName} onChange={(e)=>changeHandler(e)} />
                <br />
                <label>Last Name:</label>
                <br />
                <input type="text" name="lastName" value={data.lastName} onChange={(e)=>changeHandler(e)} />
                <br />
                <label>Email:</label>
                <br />
                <input type="email" name="email" value={data.email} onChange={(e)=>changeHandler(e)} />
                <br />
                <label>Password:</label>
                <br />
                <input type="password" name="password" value={data.password} onChange={(e)=>changeHandler(e)} />
                <br />
                <input type="submit" value="Register" />
                <br />
                <p>already have an account? <Link to="/" >Login</Link> </p>
            </form>
        </div>
    )
}

export default Register