import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../service/action/authAction";

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const decodeUser = jwt_decode(user.token);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logouts=()=>{
        dispatch(logout())
        setTimeout(() => {
            navigate('/')
        }, 1000);
    }
    if (decodeUser.role === "admin") {
        return (
            <div>
                <h1>Admin Routes</h1>
                <button onClick={logouts} >Logout</button>
            </div>
        )
    }
    else if (decodeUser.role === "user") {
        return (
            <div>
                <h1>User Routes</h1>
                <button onClick={logouts} >Logout</button>
            </div>
        )
    }
}
export default Header;