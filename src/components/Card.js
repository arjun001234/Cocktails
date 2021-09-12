import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import Details from './Details';


const styles = makeStyles({
    root: {
        marginTop: 40
    },
    imgstyle: {
        width: "100%",
        height: 300
    },
    textStyle: {
        fontSize: 18
    },
    buttonstyle: {
        '&:hover': {
            backgroundColor: "#3FFFE6",
            color: "black"
        }
    }
})

export default function Cards(props) {

    const {strDrinkThumb,strAlcoholic,strDrink,strGlass,idDrink} = props;

    const classes = styles();

    // <Details img={strDrinkThumb} name={strDrink} type={strAlcoholic}/>

    return (
        <div className={classes.root}>
             <Card>
                <CardMedia image={strDrinkThumb} title="Cocktails" className={classes.imgstyle}/>
                <CardContent>
                    <Typography variant="h5" style={{fontWeight: "bold"}}>{strDrink}</Typography>
                    <Typography  className={classes.textStyle}>{strAlcoholic}</Typography>
                    <Typography style={{fontWeight: "lighter",color: "GrayText",fontSize: 15}}>{strGlass}</Typography>
                    <Button variant="contained" className={classes.buttonstyle} color="primary" style={{marginTop: 10}} ><Link to={`/details/${idDrink}`} style={{textDecoration: "none",color: "white"}}>Details</Link></Button>
                </CardContent>
             </Card>
        </div>
    )
}