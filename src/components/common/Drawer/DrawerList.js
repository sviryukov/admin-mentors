import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {List} from '@material-ui/core';
import {Info, ListAlt, Group} from '@material-ui/icons';
import {Logo} from "./Logo";
import {DrawerListItem} from "./DrawerListItem";
import {DrawerListDivider} from "./DrawerListDivider";

const useStyles = makeStyles({
    drawerList: {
        padding: '0px'
    }
});

const DrawerList = () => {
    const classes = useStyles();
    const list = [{
        text: 'О панели управления',
        icon: Info,
        href: '/'
    }, {
        text: 'Новости',
        icon: ListAlt,
        href: '/news'
    }, {
        text: 'Менторы',
        icon: Group,
        href: '/mentors'
    }];
    return (
        <List className={classes.drawerList}>
            <Logo/>
            <DrawerListDivider/>
            {list.map(listItem => (
                <DrawerListItem key={listItem.text} {...listItem}/>
            ))}
        </List>
    );
};

export {DrawerList};