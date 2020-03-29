import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';

let useStyles = makeStyles({
    formHeader: {
        marginBottom: '20px',
        fontWeight: '100'
    }
});

const FormHeader = props => {
    const classes = useStyles();
    return (
        <Typography className={classes.formHeader}
                    variant={props.variant || 'h1'}
                    style={{textAlign: props.textAlign || 'left'}}>
            {props.text}
        </Typography>
    );
};

export {FormHeader};