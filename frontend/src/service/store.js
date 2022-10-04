import AuthReducer from "./reducers/authReducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    auth:AuthReducer
})


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;