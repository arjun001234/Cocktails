import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '70px',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '20px',
    },
    content: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '60%'
        }
    }
}));

export default function About() {

    const classes = styles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" style={{marginBottom: 20,fontWeight: "bold"}}>About us</Typography>
            <Typography variant="h6" className={classes.content} >A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. There are various types of cocktails, based on the number and kind of ingredients added. The origins of the word cocktail have been debated. The first known written mention of cocktail as an alcoholic beverage appeared in The Balance and Columbian Repository (Hudson, New York) May 13, 1806.The early to mid-2000s saw the rise of cocktail culture through the style of mixology which mixes traditional cocktails and other novel ingredients.</Typography>
        </div>
    )
}