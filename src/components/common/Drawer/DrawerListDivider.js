import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Divider} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    drawerDivider: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.primary.contrastText
    }
}));

const DrawerListDivider = () => {
    const classes = useStyles();
    return (
        <Divider className={classes.drawerDivider}/>
    );
};

export {DrawerListDivider};