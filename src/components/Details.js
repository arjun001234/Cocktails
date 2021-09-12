import React from 'react';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link,useParams } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import { Animation } from './animation';

const styles = makeStyles(theme =>({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '80%'
    },
    divstyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    divstyle2: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column"
        }
    },
    divstyle3: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginRight: "10%",
        [theme.breakpoints.down('xs')]: {
            position: "relative",
            top: 50,
            margin: 0,
            width: "80%"
        },
        width: "50%",
        marginLeft: 30,
        backgroundColor: "#eee"
    },
    textstyle: {
        margin: 8,
        padding: 5,
        fontWeight: 'bold' 
    },
    imgStyle: {
        [theme.breakpoints.down('xs')]: {
            width: "80%",
            margin: 0
        },
        marginLeft: "10%"
    }
}))

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export default function Details() {

    const classes = styles();

    const { id } = useParams();

    const{ products,display } = useFetch(url);

    const list =  products.filter((product) => product.idDrink === id);
    
    return (
            <div className={classes.root} style={{position: "absolute",top: 100, width: "100%"}}>
                <Button variant="contained" style={{marginBottom: 30,backgroundColor: "#3FFFE6"}}><Link to="/" style={{textDecoration: "none",color: "white"}}>Back Home</Link></Button>
                {display ? <Animation /> : list.map((item) => {
                    return  <div className={classes.root}>
                    <Typography variant="h4" style={{marginBottom: 30,fontWeight: "bold"}}>{item.strDrink}</Typography>
                        <div className={classes.divstyle2} style={{width: "100%"}}>
                            <img src={item.strDrinkThumb} height="400" width="40%" alt="details"  className={classes.imgStyle} />
                            <div className={classes.divstyle3} style={{height: "400px"}}>
                                <div className={classes.divstyle}>
                                    <Typography className={classes.textstyle}>Name - </Typography>
                                    <Typography>{item.strDrink}</Typography>
                                </div>
                                <div className={classes.divstyle}>
                                    <Typography className={classes.textstyle}>Category - </Typography>
                                    <Typography>{item.strCategory}</Typography>
                                </div>
                                <div className={classes.divstyle}>
                                    <Typography className={classes.textstyle}>Type - </Typography>
                                    <Typography>{item.strAlcoholic}</Typography>
                                </div>
                                <div className={classes.divstyle}>
                                    <Typography className={classes.textstyle}>Glass - </Typography>
                                    <Typography>{item.strGlass}</Typography>
                                </div>
                                <div className={classes.divstyle}>
                                    <Typography className={classes.textstyle}>Instruction - </Typography>
                                    <Typography>{item.strInstructions}</Typography>
                                </div>
                                <div className={classes.divstyle}>
                                    <Typography className={classes.textstyle}>Ingredients - </Typography>
                                    <Typography>{`${item.strIngredient1},${item.strIngredient2},${item.strIngredient3}`}</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
    )
}