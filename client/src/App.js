import React, {useEffect, useState} from 'react'
import {AppBar, Button, Container, Grid, Grow} from "@material-ui/core";
import logo from './img/logo.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles'
import {useDispatch} from "react-redux";
import {getPosts} from "./store/actions/posts";

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="primary">
                <img className={classes.image} src={logo} alt="icon" height="60"/>
                <Button className={classes.btn} variant="outlined" size="large" onClick={() => setModalShow(true)}>Create Post</Button>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12}>
                            <Posts setCurrentId={setCurrentId}  onShow={() => setModalShow(true)}/>
                        </Grid>
                        <Form currentId={currentId} setCurrentId={setCurrentId}
                              show={modalShow} onHide={() => setModalShow(false)}
                        />
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
