import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Actions, Selectors } from 'core';
import {SignInComponent} from '../components/SignIn';

export class SignInContainer extends Component{
    state = {
        email:"",
        password: ""
    };
    handleEmail = (email) => {this.setState({email})};
    handlePassword = (password) => {this.setState({password})};
    handleSubmit =  async (event) => {
        event.preventDefault();
        const {email,password} = this.state;
        await this.props.logIn(email,password, console.error);
        this.setState({
            email:"",
            password:""
        })
    };
    render() {
        return (
            <SignInComponent handleEmail={this.handleEmail}
                             handlePassword={this.handlePassword}
                             handleSubmit={this.handleSubmit}
                             email={this.state.email}
                             password={this.state.password}
            />
        );
    }
}

const mapDispatchToProps = {
    logIn: Actions.loginAction,
    logOut: Actions.logOutAction,
    signUp:Actions.signUpAction,
    forgotPassword : Actions.forgotPasswordAction
};

export const SignIn = connect(
    null,
    mapDispatchToProps,
)(SignInContainer);