import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import Loader from "../../../n1-main/m1-ui/common/Loader/Loader";
import {selectStateLogin} from "../../../n1-main/m2-bll/b3-loginReducer/selectors";
import {forgotPasswordTc} from "../../../n1-main/m2-bll/b3-passwRestoreReducer/passwRestoreReducer";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const PasswordRestore = () => {
    const {isLoggedIn, isLoading} = useSelector(selectStateLogin)
    const dispatch = useDispatch()

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
            from: 'test-front-admin <slipok1999@mail.ru>',
            message: `<div>password recovery link: <a href='http://localhost:3000/#/restore/$token$'>TAP TAP TAP</a></div>`
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(forgotPasswordTc(values))
        },
    })

    const isValid = formik.errors.email
    return (<Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                   Restore Password
                </Typography>
                {isLoading && !isLoggedIn
                    ? <Loader/>
                    : !isLoggedIn
                        ? <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                            <Button
                                disabled={!!isValid}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </form>
                        : <Redirect to={'/profile'}/>}
            </div>
        </Container>
    );


}