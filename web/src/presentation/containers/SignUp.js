import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Actions, Selectors } from 'core';
import {SignUpComponent} from '../components/SignUp';

export class SignUpContainer extends Component{
    state = {
        email:"",
        password: ""
    };
    handleEmail = (email) => {this.setState({email})};
    handlePassword = (password) => {this.setState({password})};
    handleSubmit =  async (event) => {
        event.preventDefault();
        const {email,password} = this.state;
        await this.props.signUp(email,password, console.error);
        this.setState({
            email:"",
            password:""
        })
    };
    render() {
        return (
            <SignUpComponent handleEmail={this.handleEmail}
                             handlePassword={this.handlePassword}
                             handleSubmit={this.handleSubmit}
                             email={this.state.email}
                             password={this.state.password}
            />
        );
    }
}

const mapDispatchToProps = {
    signUp:Actions.signUpAction,
};

export const SignUp = connect(
    null,
    mapDispatchToProps,
)(SignUpContainer);