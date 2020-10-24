import React from 'react';
import {AppBar, IconButton, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import {Link, NavLink} from 'react-router-dom';
import {Menu} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {selectStateLogin} from "../../m2-bll/b3-loginReducer/selectors";

const useStyles = makeStyles({
    root: {
        color: 'white',
        textDecoration: 'none',
        "&:hover, &:focus": {
            color: '#04324f'
        }
    },
    toolbar: {
        padding: 0,
    }
});

const Header = () => {
    const {isLoggedIn} = useSelector(selectStateLogin)
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Grid container justify="space-around">
                <Grid item md={10} sm={11}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu/>
                        </IconButton>
                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <NavLink to="/" className={classes.root}>
                                    Main
                                </NavLink>
                            </Typography>
                        </Box>
                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <NavLink to="/login" className={classes.root}>
                                    Login
                                </NavLink>
                            </Typography>
                        </Box>
                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <NavLink to="/registration" className={classes.root}>
                                    Registration
                                </NavLink>
                            </Typography>
                        </Box>


                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <NavLink to="/restore" className={classes.root}>
                                    Restore password
                                </NavLink>
                            </Typography>
                        </Box>
                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <NavLink to="/update" className={classes.root}>
                                    Update password
                                </NavLink>
                            </Typography>
                        </Box>
                        {isLoggedIn ? <Box mr={1}>
                            <Typography variant="subtitle1">
                                <NavLink to="/profile" className={classes.root}>
                                    Profile
                                </NavLink>
                            </Typography>
                        </Box> : null}
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;
