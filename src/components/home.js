import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from './input';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Animation } from './animation';
import { useFetch } from '../hooks/useFetch'

const styles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        boxSizing: 'border-box',
        marginTop: '100px'
    },
    textstyle: {
        fontWeight: "bold",
        marginTop: 50,
        textAlign: 'center',
        width: '100%'
    },
    gridstyle: {
        width: "100%"
    }
})

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export default function Home() {

    const classes = styles();

    const { products, setSearch, display} = useFetch(url);

    return (
        <div className={classes.root}>
            <Input value={setSearch}/>
            <Typography variant="h4" className={classes.textstyle} color="primary">Cocktails</Typography>
            {display ? <Animation /> : <Grid container spacing={4} className={classes.gridstyle}>
                { products === null ? 
                    <Typography variant="h5" className={classes.textstyle} color="primary" style={{textAlign: "center"}}>There is no such Item</Typography>
                    :
                products.map((product) => {
                    return <Grid item lg={4} md={6} xs={12} key={product.idDrink}>
                    <Card key={product.idDrink} {...product} />
                </Grid>
                })}
            </Grid> }
        </div>
    )
}