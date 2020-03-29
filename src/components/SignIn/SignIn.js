import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {SignInForm} from "./SignInForm";

const SignIn = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <SignInForm/>
        </React.Fragment>
    );
};

export {SignIn};