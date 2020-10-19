import React from 'react';
import {AppBar, IconButton, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Menu} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles';

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
                                <Link to="/" className={classes.root}>
                                    Main
                                </Link>
                            </Typography>
                        </Box>
                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <Link to="/login" className={classes.root}>
                                    Login
                                </Link>
                            </Typography>
                        </Box>
                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <Link to="/registration" className={classes.root}>
                                    Registration
                                </Link>
                            </Typography>
                        </Box>
                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <Link to="/profile" className={classes.root}>
                                    Profile
                                </Link>
                            </Typography>
                        </Box>
                        <Box mr={1}>
                            <Typography variant="subtitle1">
                                <Link to="/restore" className={classes.root}>
                                    Restore password
                                </Link>
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1">
                            <Link to="/update" className={classes.root}>
                                Update password
                            </Link>
                        </Typography>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;
