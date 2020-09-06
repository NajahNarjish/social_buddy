import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '40px auto',
      maxWidth: 1000,
      backgroundColor: "#E9F4D2"
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  
const Posts = (props) => {
    const classes = useStyles();
    const {userId,title, id, body } = props.post;
    
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="https://www.crushpixel.com/static16/preview2/template-design-symbol-team-friendship-2344377.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container style={{marginLeft:'20px'}}>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Name
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {body}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Link style = {{textDecoration: 'none'}}to = {`/post/${id}`}>
                                    <Button variant="contained">See more...</Button>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">buddy ID: {userId}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Posts;