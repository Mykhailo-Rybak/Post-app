import React from 'react';
import {Button, Card, CardActions, CardMedia, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import moment from 'moment';
import {useDispatch} from 'react-redux';

import {deletePost} from '../../../store/actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId, onShow }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const edit = () => {
        setCurrentId(post._id);
        onShow()
    };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media}
                       image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                       title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={edit}><CreateIcon fontSize="default" /></Button>
            </div>

            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                <Typography className={classes.title} variant="body2" gutterBottom color="textSecondary" component="p">{post.message}</Typography>
            <CardActions className={classes.cardActions}>
                <Button  className={classes.btn} size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Post;
