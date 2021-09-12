import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About';
import Error from './components/error';
import Home from './components/home';
import Details from './components/Details';
import Layout from './components/layout';

export default function App() {

    return (
            <Router>
                <Layout>
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route  path="/details/:id" children={<Details/>}>
                </Route>
                <Route >
                    <Error />
                </Route>
            </Switch>
            </Layout>
        </Router>
    )
}