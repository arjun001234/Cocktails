import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const styles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#3FEEE6"
    },
    divstyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    linkstyle: {
        textDecoration: "none",
        '&:hover': {
            color: "black"
        },
        color: "white"
    }
})

export default function NavBar() {

    const classes = styles();

    return (
        <AppBar>
            <Toolbar className={classes.root}>
                <div>
                    <Typography variant="h4" style={{fontWeight: 'bold'}}>Cocktails</Typography>
                </div>
                <div className={classes.divstyle}>
                    <Typography variant="h6" ><Link to="/" className={classes.linkstyle}>Home</Link></Typography>
                    <Typography variant="h6" style={{marginLeft: 20}}><Link to="/about" className={classes.linkstyle}>About</Link></Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}