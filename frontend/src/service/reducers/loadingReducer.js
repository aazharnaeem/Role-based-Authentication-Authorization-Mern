import { loading, notLoading } from "../actionTypes/authTypes";


const loadingRedcuer =(state = false, action) => {
    switch (action.type) {
        case loading:
            return action.payload;
        case notLoading:
            return action.payload;
        default:
            return state;
    }
}

export default loadingRedcuer;