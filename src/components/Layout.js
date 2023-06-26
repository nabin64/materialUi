import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import MyDrawer from './Drawer'
import MyAppBar from './AppBar'
const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
        },
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2),
        },
        toolbar: theme.mixins.toolbar
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        },
    ];

    return (
        <div className={classes.root}>
            {/* app bar */}
            <MyAppBar />
            {/* side drawer */}
             <MyDrawer />

            {/* main content */}
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}