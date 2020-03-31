import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ListItem, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    logo: {
        width: '179px',
        padding: '0px',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('xl')]: {
            width: '207px'
        }
    },
    logoText: {
        fontSize: '19px',
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px',
        },
        lineHeight: '1',
        fontWeight: '100',
        letterSpacing: '-0.01562em'
    }
}));

const Logo = () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.logo}>
            <Typography variant='h2' className={classes.logoText}>
                КЛУБ<br/>МЕНТОРОВ<br/>ФИЗТЕХ-СОЮЗА
            </Typography>
        </ListItem>
    );
};

export {Logo};