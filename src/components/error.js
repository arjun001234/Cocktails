import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from  '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    root: {
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            width: "100%"
        }
    }
}));

export default function Error() {
    
    const classes = styles()

    return (
        <div style={{display: "flex",alignItems: "center",flexDirection: "column",justifyContent: "center",position: "absolute",top: "25%"}} className={classes.root}>
            <Typography variant="h4" style={{marginBottom: 30}}>Page Not Found!</Typography>
            <Button variant="contained" style={{backgroundColor: "#3FFFE6"}}>
                <Link to="/" style={{textDecoration: "none",color:"white"}}>Back To Home</Link>
            </Button>
        </div>
    )
}