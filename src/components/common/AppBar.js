import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, IconButton, Typography} from '@material-ui/core';
import {Menu} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    appBar: {
        paddingBottom: theme.spacing(3)
    },
    openDrawerButton: {
        padding: '0px',
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}));

const AppBar = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              component={Typography} variant='h1' noWrap
              className={classes.appBar}>
            <IconButton color='inherit'
                        onClick={props.handleDrawerToggle}
                        className={classes.openDrawerButton}>
                <Menu/>
            </IconButton>
            {props.pageName}
        </Grid>
    );
};

export {AppBar};