import { LoginSucess, LOGIN_FAIL, RegisterSucess, REGISTER_FAIL, LogoutSucess, Logout_Fail } from "../actionTypes/authTypes";
import {UserServer, config} from "../../config/http";
import axios from "axios"

const login = (data) => async (dispatch) => {
    // const navigate  = useNavigate();
    try {
        const res = await axios.post(`${UserServer}/auth/login`,data, config);
        dispatch({
            type: LoginSucess,
            payload: res.data
        })
        const user ={role:res.data.role, token :res.data.token}
        localStorage.setItem("user", JSON.stringify(user));
       
        // alert(res.data.message)
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
        alert(error.response.data.message)
    }
}

const register = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${UserServer}/auth/register`, data, config);
        dispatch({
            type: RegisterSucess,
            payload: res.data
        })
        alert(res.data.message)
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message
        })
        alert(error.response.data.message)
    }
}

const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem("user");
        dispatch({
            type: LogoutSucess,
        })
    } catch (error) {
        dispatch({
            type: Logout_Fail,
            payload: error.response.data.message
        })
    }
}

export { login, register, logout };