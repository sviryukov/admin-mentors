import React from 'react';
import {Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

const FormResultAlert = props => {
    return (
        <Snackbar open={props.open} autoHideDuration={3000} onClose={props.handleClose}>
            <Alert severity={props.severity}>
                {props.text}
            </Alert>
        </Snackbar>
    );
};

export {FormResultAlert};