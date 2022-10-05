import AuthReducer from "./reducers/authReducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import loadingRedcuer from "./reducers/loadingReducer";
const rootReducer = combineReducers({
    auth:AuthReducer,
    loading:loadingRedcuer
})


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;