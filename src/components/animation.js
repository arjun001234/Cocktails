import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 300,
    },
    divstyle: {
        width: 30,
        height: 30,
        border: "solid 5px grey",
        borderRadius: "100%",
        animation: `$myEffect 1s ease-in-out`,
        animationIterationCount: 10
    },
    '@keyframes myEffect': {
        "25%": {
            borderLeft: "solid 5px #3FFFE6"
        },
        "50%": {
            borderTop: "solid 5px #3FFFE6" 
        },
        "75%": {
            borderRight:  "solid 5px #3FFFE6"
        },
        "100%": {
            borderBottom:  "solid 5px #3FFFE6"
        }
    }
})

export const Animation = () => {

    const classes = styles();

    return (
        <div className={classes.root}>
            <div className={classes.divstyle}></div>
        </div>
    )
}
