import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useHistory, useLocation } from 'react-router-dom';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240
const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%',
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
        background: '#f5f5f5'
    },
    title: {
        textAlign: 'center'
    }
})




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
    {
        text: 'Nabin Note',
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path: '/'
    },
];


const MyDrawer = () => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Nabin Note's
                    </Typography>
                </div>

                {/* links/list section */}
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>


        </>
    )
}


export default MyDrawer;
