import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useFormik} from "formik";
import { useParams } from 'react-router-dom';

type FormikErrorType = {
    password?: string
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

export const PasswordUpdate = () => {
    const {token} = useParams()
    console.log(token)


    const classes = useStyles();


    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Must be 5 ';
            }
            return errors;
        },
        onSubmit: values => {
        },
    })
    const isValid = formik.errors.password;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg">
                </Avatar>
                <Typography component="h1" variant="h5">
                    Change password
                </Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="New password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                    <Button
                        disabled={!!isValid}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Change
                    </Button>
                </form>

            </div>
        </Container>
    );


}
