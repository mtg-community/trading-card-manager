import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    signUpAction,
    logOutAction,
    loginAction,
    forgotPasswordAction
} from '../../core/frameworks/redux/ducks';
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
        const onError = (error) => {
            const title = 'SIGN_IN/ERROR_TITLE';
            alert(title, { error, title });
        };
        await this.props.logIn(this.state.email,this.state.password, onError("login"));
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
    logIn: loginAction,
    logOut: logOutAction,
    signUp:signUpAction,
    forgotPassword : forgotPasswordAction
};

export const SignIn = connect(
    null,
    mapDispatchToProps,
)(SignInContainer);