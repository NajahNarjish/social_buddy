import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import fakedata from '../../../src/fakedata/commentPic.js';

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
   
    const [fakeImages, setFakeImages] = useState(fakedata);
 
    const { name, body, id} = props.comment;

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar style = {{border:"1px solid black"}} alt="" src={fakeImages[1].img} />
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