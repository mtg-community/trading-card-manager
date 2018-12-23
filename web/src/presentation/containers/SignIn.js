import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction, selectUser } from 'core';
import { SignInComponent } from '../components/SignIn';

class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = email => {
    this.setState({ email });
  };
  handlePassword = password => {
    this.setState({ password });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    await this.props.logIn(email, password, console.error);
    this.setState({
      email: '',
      password: '',
    });
  };
  render() {
    return (
      <SignInComponent
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: selectUser(state),
});

const mapDispatchToProps = {
  logIn: loginAction
};

export const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);
