import React from 'react'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return(
        <nav>
            <div>
                <NavLink to={"/sign_in"}>Sing In</NavLink>
            </div>
            <div>
                <NavLink to={"/sign_up"}>Sign Up</NavLink>
            </div>
            <div>
                <NavLink to={"/forgot_password"}>Forgot password</NavLink>
            </div>
            <div>
                <NavLink to={"/new_password"}>New Password</NavLink>
            </div>
            <div>
                <NavLink to={"/profile"}>Profile</NavLink>
            </div>
        </nav>
    )
}