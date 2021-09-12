import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const styles = makeStyles(theme => ({
    root: {
        width: "500px",
        height: "110px",
        [theme.breakpoints.down('sm')]: {
            width: 300,
            height: 150
        }
    },
    input: {
        width: "100%",
        backgroundColor: "#DCE1E3",
        '&:hover': {
            borderRight: "solid 2px black",
            borderLeft: "solid 2px black",
            borderTop: "solid 2px black"
        }
    },
    textstyle: {
        marginBottom: 10,
        fontWeight: "bold"
    },
    cardstyle: {
        marginLeft: 5,
        marginRight: 5
    }
}))

export default function Input({value}) {

    const classes = styles();

    const searchValue = React.useRef('');

    const handleChange = () => {
        value(searchValue.current.value);
    }

    const theme = createMuiTheme({
        overrides: {
            MuiFilledInput: {
                input: {
                    padding: 5
                },
                underline: {
                    border: "none"
                }
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
        <Card className={classes.root} elevation={5}>
            <CardContent className={classes.cardstyle}>
                <Typography variant="h6" className={classes.textstyle} color="primary">Search For Your Favorite Cocktails</Typography>
                <TextField variant="filled" className={classes.input} inputRef={searchValue} onChange={handleChange} type="text"/>
            </CardContent>
        </Card>
        </ThemeProvider>
    )
}