import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {Paper} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import {useSelector} from "react-redux";
import {selectStateLogin} from "../a1-login/selectors";
import styles from './Profile.module.css';
import {authAPI} from "../a1-login/api";
import { Redirect } from 'react-router-dom';




const Profile = () => {
    const {created, updated, name, isLoggedIn} = useSelector(selectStateLogin)
        if(!isLoggedIn) return <Redirect to={'/login'}/>


    return (
        <Container component="main" maxWidth="xs" style={{paddingTop: '200px'}} >
            <Paper style={{borderRadius: '15px'}}>
                <span>Profile</span>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div>{name}</div>
                <div>{created}</div>
                <div>{updated}</div>
            </Paper>
        </Container>
    );

}

export default Profile;