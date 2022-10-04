import { LoginSucess, LOGIN_FAIL, LogoutSucess, Logout_Fail, RegisterSucess, REGISTER_FAIL } from "../actionTypes/authTypes";

const initialState = {
    user: {},
    isAuth: false,
    loading: true,
    error: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginSucess:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                loading: false,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                user: {},
                isAuth: false,
                loading: false,
                error: action.payload,
            }
        case RegisterSucess:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                loading: false,
            }
        case REGISTER_FAIL:
            return {
                ...state,
                user: {},
                isAuth: false,
                loading: false,
                error: action.payload,
            }
        case LogoutSucess:
            return {
                ...state,
                user: {},
                isAuth: false,
                loading: false,
            }
        case Logout_Fail:
            return {
                ...state,
                user: {},
                isAuth: false,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default AuthReducer;