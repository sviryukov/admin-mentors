import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Hidden, Drawer as RawDrawer} from '@material-ui/core';
import {DrawerList} from "./DrawerList";

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: '260px',
            flexShrink: 0
        }
    },
    drawerPaper: {
        width: '260px',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    }
}));

const Drawer = props => {
    const classes = useStyles();
    return (
        <nav className={classes.drawer}>
            <Hidden smUp implementation='css'>
                <RawDrawer variant='temporary'
                           open={props.mobileOpen}
                           onClose={props.handleDrawerToggle}
                           classes={{paper: classes.drawerPaper}}
                           ModalProps={{keepMounted: true}}>
                    <DrawerList/>
                </RawDrawer>
            </Hidden>
            <Hidden xsDown implementation='css'>
                <RawDrawer variant='permanent' open classes={{paper: classes.drawerPaper}}>
                    <DrawerList/>
                </RawDrawer>
            </Hidden>
        </nav>
    );
};

export {Drawer};