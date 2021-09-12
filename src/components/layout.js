import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './navbar';

const styles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    }
})

const Layout = ({children}) => {

    const classes = styles();

    return (
        <div className={classes.root}>
            <NavBar />
            {children}
        </div>
    )
}

export default Layout
