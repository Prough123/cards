import React from 'react'
import {Route, Switch} from "react-router-dom";
import {NewPassword} from "../components/NewPassword/NewPasswrod";
import {SignIn} from "../components/SignIn/SignIn";
import {SignUp} from "../components/SignUp/SignUp";
import {Profile} from "../components/Profile/Profile";
import {ForgotPassword} from "../components/ForgotPassword/FotgotPassword";


export const Routes = () => {
    return (
        <Switch>
            <Route path="/new_password" render={() => <NewPassword/>}/>
            <Route path="/sign_in" render={() => <SignIn/>}/>
            <Route path="/sign_up" render={() => <SignUp/>}/>
            <Route exact path="/profile" render={() => <Profile/>}/>
            <Route path="/forgot_password" render={() => <ForgotPassword/>}/>
        </Switch>
    )
}
