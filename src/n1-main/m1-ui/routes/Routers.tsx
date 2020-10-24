import React from 'react';
import Main from "../main/Main";
import {Route, Switch, Redirect} from "react-router-dom";
import Registration from "../../../n2-features/f1-auth/a2-registr/Registration";
import Profile from "../../../n2-features/f1-auth/a4-profile/Profile";
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import styles from './Routers.module.css';
import {UpdatePassword} from "../../../n2-features/f1-auth/a4-update/UpdatePassword";
import {RestorePassword} from "../../../n2-features/f1-auth/a3-restore/RestorePassword";


const Routers = () => {
    return (
        <Switch>
            <Route
                exact path="/"
                render={() => <Main/>}
            />
            <Route
                path="/registration"
                render={() => <Registration/>}
            />
            <Route
                path="/login"
                render={() => <Login/>}
            />
            <Route
                path="/profile"
                render={() => <Profile/>}
            />
            <Route
                path="/restore"
                render={() => <RestorePassword/>}
            />
            <Route
                path="/update/:id"
                render={() => <UpdatePassword/>}
            />
            <Route path={'/404'} render={() => <h1>404</h1>}/>
            <Redirect from={'*'} to={'/404'}/>
        </Switch>
    );
}

export default Routers;
