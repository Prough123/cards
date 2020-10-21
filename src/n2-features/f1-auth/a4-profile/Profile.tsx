import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {Paper} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import {useSelector} from "react-redux";
import styles from './Profile.module.css';
import {Redirect} from 'react-router-dom';
import {selectStateProfile} from "../../../n1-main/m2-bll/b2-profileReducer/selectors";
import {selectStateLogin} from "../../../n1-main/m2-bll/b3-loginReducer/selectors";


const Profile = () => {
    const {isLoggedIn} = useSelector(selectStateLogin)
    const {created, updated, name, _id} = useSelector(selectStateProfile)


    if (!isLoggedIn) return <Redirect to={'/login'}/>
    return (
        <Container component="main" maxWidth="xs" style={{paddingTop: '200px'}}>
            <Paper style={{borderRadius: '15px'}}>
                <span>Profile</span>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                <div>{name}</div>
                <div>{created}</div>
                <div>{updated}</div>
            </Paper>
        </Container>
    );

}

export default Profile;