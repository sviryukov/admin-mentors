import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {CssBaseline, Grid} from "@material-ui/core";
import {Drawer} from './Drawer';
import {AppBar} from "./AppBar";

const useStyles = makeStyles(theme => ({
    page: {
        display: 'flex'
    },
    pageContent: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const Page = props => {
    const classes = useStyles();
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    return (
        <div className={classes.page}>
            <CssBaseline/>
            <Drawer mobileOpen={mobileDrawerOpen} handleDrawerToggle={handleDrawerToggle}/>
            <Grid container className={classes.pageContent}>
                <AppBar handleDrawerToggle={handleDrawerToggle} pageName={props.pageName}/>
                {props.children}
            </Grid>
        </div>
    );
};

export {Page};