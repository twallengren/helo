import React, { Component } from 'react';

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

    render() {

        return (
            <div>
                USERNAME: <input placeholder="username" onChange={event => this.inputBoxChange(event, "username")} />
                PASSWORD: <input placeholder="password" onChange={event => this.inputBoxChange(event, "secret")} />
                <button>LOGIN</button>
                <button>REGISTER</button>
            </div>
        );
    }
}

export default Auth;