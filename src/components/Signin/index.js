import React, { Component } from 'react';

class Signin extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <h1>Login screen</h1>
                <button onClick={()=>
                    this.props.submit({ username: "Mohsin", password: 123})}>
                    Login user 
                </button>
            </div>
        );
    }
}

export default Signin;