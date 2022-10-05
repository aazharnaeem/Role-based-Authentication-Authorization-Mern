import { loading } from "../actionTypes/authTypes"


const loadings =()=>{
    return {
        type:loading,
        payload:true
    }
}

const notLoading =()=>{
    return {
        type:loading,
        payload:false
    }
}


export {loadings, notLoading}
