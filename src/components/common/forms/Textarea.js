import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    textarea: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '95%',
            marginRight: '5%'
        }
    }
}));

const Textarea = props => {
    const classes = useStyles();
    return (
        <TextField label={props.label + (props.required ? " *" : "")}
                   variant={props.variant || 'standard'}
                   multiline
                   rows={props.rows || 2}
                   margin='normal'
                   value={props.value}
                   onChange={event => props.handleChange(event.target.value)}
                   error={props.error}
                   className={classes.textarea}/>
    );
};

export {Textarea};