import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpAction } from 'core';
import { SignUpComponent } from '../components/SignUp';
import PropTypes from 'prop-types';
import { showModal } from '../components/Modal';

class SignUpContainer extends Component {
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
    const onError = error => {
      showModal('SignUp Error', error.message);
    };
    await this.props.signUp(email, password, onError);
    this.setState({
      email: '',
      password: '',
    });
  };
  render() {
    return (
      <SignUpComponent
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

const mapDispatchToProps = {
  signUp: signUpAction,
};

SignUpContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
};

export const SignUp = connect(
  null,
  mapDispatchToProps,
)(SignUpContainer);
