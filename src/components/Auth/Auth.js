import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3005'

class Auth extends Component {

    constructor() {

        super();

        this.state = {
            username: "",
            secret: ""
        }

    }

    inputBoxChange = (event, type) => {

        this.setState({ [type]: event.target.value })

    }

    addUser = () => {

        axios.post(`${BASE_URL}/api/users`, this.state).then(response => {
            this.props.routeProps.history.push('/dashboard')
        })

    }

    authUser = () => {

        axios.post(`${BASE_URL}/api/auth`, this.state).then(response => {
            if (response.status === 200) {
                this.props.routeProps.history.push('/dashboard')
            }
        })

    }

    render() {

        return (
            <div>
                USERNAME: <input placeholder="username" onChange={event => this.inputBoxChange(event, "username")} />
                PASSWORD: <input placeholder="password" onChange={event => this.inputBoxChange(event, "secret")} />
                <button onClick={this.authUser}>LOGIN</button>
                <button onClick={this.addUser}>REGISTER</button>
            </div>
        );
    }
}

export default Auth;