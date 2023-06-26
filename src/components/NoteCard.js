import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DeleteOutlined } from '@mui/icons-material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import { yellow, green, pink, blue } from '@mui/material/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (item) => {
            if (item.category === 'work') {
                return yellow[700];
            }
            if (item.category === 'todos') {
                return green[700];
            }
            if (item.category === 'play') {
                return pink[700];
            }
            return blue[500];
        },
    },
});

const NoteCard = ({ item, handleDelete, handleEdit }) => {
    const classes = useStyles(item);

    return (
        <Card elevation={20} sx={{margin:2}}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {item.category[0].toUpperCase()}
                    </Avatar>
                }
                action={ <>

                    <IconButton>
                        <ModeEditIcon onClick={() => handleEdit(item.id)} />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item.id)}>
                        <DeleteOutlined />
                    </IconButton>
                </>
                }
                title={item.title}
                subheader={item.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {item.details}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NoteCard;
