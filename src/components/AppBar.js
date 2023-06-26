import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import {format} from 'date-fns'
import { Avatar } from '@mui/material';

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    width: `calc(100% - ${drawerWidth}px)`,
}));

const MyAppBar = () => {
    return (
        <StyledAppBar elevation = {0}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                 
                 Today is the {format(new Date(),'do MMMM Y')}
                </Typography>
                <Typography>
                    Nabin
                </Typography>

                <Avatar src="/favicon.ico" sx={{ marginLeft:1 }} />
            </Toolbar>
        </StyledAppBar>
    );
};

export default MyAppBar;
