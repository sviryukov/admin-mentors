import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Button} from '@material-ui/core';

let useStyles = makeStyles({
    sendButtonContainer: {
        marginTop: "30px"
    }
});

const SendButton = props => {
    const classes = useStyles();
    return (
        <Box className={classes.sendButtonContainer} style={{ textAlign: props.textAlign || 'center'}}>
            <Button variant="contained"
                    size="large"
                    color="primary"
                    onClick={props.handleClick}>
                {props.text}
            </Button>
        </Box>
    );
};

export {SendButton};