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
                    <Route path="/" component={(props) => { return <Auth setRoute={this.props.setRoute} routeProps={props} currentRoute={this.props.currentRoute} /> }} exact />
                    <Route path="/dashboard" component={(props) => { return <Dashboard setRoute={this.props.setRoute} routeProps={props} currentRoute={this.props.currentRoute} /> }} />
                    <Route path="/post/:postid" component={(props) => { return <Post setRoute={this.props.setRoute} routeProps={props} currentRoute={this.props.currentRoute} /> }} />
                    <Route path="/new" component={(props) => { return <Form setRoute={this.props.setRoute} routeProps={props} currentRoute={this.props.currentRoute} /> }} />
                </Switch>
            </div>
        )
    }
}

export default Routes; 