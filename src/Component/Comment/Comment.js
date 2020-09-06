import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        borderRadius: "20px",
        margin: "20px auto",
        backgroundColor: theme.palette.background.paper,
    },
    
}));


const Comment = (props) => {
    const classes = useStyles();

    const { name, body } = props.comment;
    return (
        <List className={classes.root}>
            
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            {body}
                        </React.Fragment>
                    }
                />
            </ListItem>       
        </List>
    );
};

export default Comment;