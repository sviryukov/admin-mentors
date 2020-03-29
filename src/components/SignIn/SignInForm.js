import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import {Form} from "../common/forms/Form";
import {signInFormData} from "./signInFormData";

let useStyles = makeStyles({
    singInForm: {
        padding: '80px 0px'
    }
});

const SignInForm =  () => {
    const classes = useStyles();
    return (
        <Grid container justify='center'>
            <Grid item xs={11} md={5} lg={3}
                  className={classes.singInForm}>
                <Form formData={signInFormData}
                      headerProps={{
                          text: 'Войти',
                          textAlign: 'center'
                      }}
                      url={'/signin'}
                      alert={{
                          success: 'Вход успешно вполнен',
                          error: 'Неверный логин или пароль'
                      }}
                      buttonText='Войти'
                      success={() => window.location.replace('/')}/>
            </Grid>
        </Grid>
    );
};

export {SignInForm};