import React, {useEffect} from 'react';
import {Box, Container, Grid, makeStyles, TextField, Typography} from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Button from "../../../n1-main/m1-ui/common/Button/Button";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../../n1-main/m2-bll/b5-registrationReducer/registerReducer";
import {AppRootStateType} from "../../../n1-main/m2-bll/store";
import Loader from "../../../n1-main/m1-ui/common/Loader/Loader";
import {Redirect} from 'react-router-dom';
import blue from "@material-ui/core/colors/blue";
import {setError} from "../../../n1-main/m2-bll/b1-app/appReducer";

type FormikErrorType = {
    email?: string;
    password?: string;
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "5rem"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
    disabled: {
        backgroundColor: blue[100]
    }
}));

const Registration = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { isRegistered} = useSelector<AppRootStateType, { isRegistered: boolean, }>(state => state.register);
    const {isLoading, error: userError} = useSelector<AppRootStateType, { isLoading: boolean,error: string | null }>(state => state.app)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (userError) {
                errors.email = userError
            }
            if (!values.password) {
                errors.password = "Required"
            } else if (!values.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
                errors.password = "Password must contain between 8 and 15 characters that are of at least one number, and one uppercase and lowercase letter"
            } else if (values.password.length > 15) {
                errors.password = "Password must contain only 15 characters"
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(registerUser(values))
        }
    })

    if (userError) formik.errors.email = userError;
    useEffect(() => {
        if (userError) dispatch(setError(null));
    }, [dispatch, formik.values, userError]);
    const isValid = formik.errors.email || formik.errors.password;

    return (
        <Container maxWidth="xs" className={classes.container}>
            <Box height="100%" display="flex" mt={8} flexDirection="column" alignItems="center">
                <Box color="secondary">
                    <AssignmentIndIcon color="secondary" fontSize="large"/>
                </Box>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                {isLoading && !isRegistered
                    ? <Loader/>
                    : !isRegistered
                        ? <form className={classes.form} onSubmit={formik.handleSubmit}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        autoComplete="email"
                                        {...formik.getFieldProps("email")}
                                    />
                                    {formik.errors.email ?
                                        <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        id="password"
                                        //instead of value={formik.values.password} onChange={formik.handleChange}   name="password"
                                        {...formik.getFieldProps("password")}
                                    />
                                    {formik.errors.password ?
                                        <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        disabled={!!isValid}
                                        className={!!isValid ? classes.disabled && classes.submit : classes.submit}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary">
                                        Sign up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        : <Redirect to="/login"/>
                }
            </Box>
        </Container>
    );
}

export default Registration;
