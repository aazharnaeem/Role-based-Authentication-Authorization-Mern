import jwt_decode from "jwt-decode";
import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredAuth = ({ allowedRole, component }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    let decodeUser ="";

    if(user){
        decodeUser = jwt_decode(user.token);
    }
    const location = useLocation() // allow to go back from the location user came from
    return (
        user ?
            allowedRole.includes(decodeUser.role) ? <Outlet /> : <Navigate to="/notAuthorized"  state={{from :location}} replace  />
        : <Navigate to="/"  />
    )
}

export default RequiredAuth