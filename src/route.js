import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';

class Routes extends Component {
    render() {

        return (
            <div>
                <Switch>
                    <Route path="/" component={(props) => { return <Auth routeProps={props} /> }} exact />
                    <Route path="/dashboard" component={(props) => { return <Dashboard routeProps={props} /> }} />
                    <Route path="/post/:postid" component={(props) => { return <Post routeProps={props} /> }} />
                    <Route path="/new" component={(props) => { return <Form routeProps={props} /> }} />
                </Switch>
            </div>
        )
    }
}

export default Routes; 