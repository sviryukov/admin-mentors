import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    longTextField: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '95%',
            marginRight: '5%'
        }
    }
}));

const LongTextField = props => {
    const classes = useStyles();
    return (
        <TextField label={props.label + (props.required ? " *" : "")}
                   variant={props.variant || 'standard'}
                   margin='normal'
                   value={props.value}
                   onChange={event => props.handleChange(event.target.value)}
                   error={props.error}
                   className={classes.longTextField}/>
    );
};

export {LongTextField};