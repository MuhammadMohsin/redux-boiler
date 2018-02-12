import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { AuthActions } from "../../store/actions/index";
import { Signin } from './../../components/index';

class Login extends Component {

    constructor(props){
        super();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(123)
    }

    loginSubmit = (user) => {
        this.props.signin(user);
    }

    render() {
        return (
            <Signin submit={this.loginSubmit} />
        );
    }
}

const mapStateToProps = (state) => {
    return { userAuth: state.AuthReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (userObj) => dispatch(AuthActions.signin(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);