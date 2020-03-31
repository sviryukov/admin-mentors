import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Link, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    drawerListItem: {
        color: theme.palette.primary.contrastText
    },
    drawerIcon: {
        color: theme.palette.primary.contrastText
    }
}));

const DrawerListItem = props => {
    const classes = useStyles();
    const Icon = props.icon;
    return (
        <ListItem button component={Link} href={props.href} className={classes.drawerListItem}>
            <ListItemIcon>
                <Icon className={classes.drawerIcon}/>
            </ListItemIcon>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
};

export {DrawerListItem};