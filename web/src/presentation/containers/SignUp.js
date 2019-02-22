import React from 'react';
import { connect } from 'react-redux';
import { signUpAction } from 'core';
import { SignUpComponent } from '../components/SignUp';
import PropTypes from 'prop-types';
import { showModal } from '../components/Modal';
import { useCredentialsHook } from './hooks';

const onError = error => {
  showModal('SignUp Error', error.message);
};

const SignUpContainer = props => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  } = useCredentialsHook(props.signUp, onError);

  return (
    <SignUpComponent
      handleEmail={setEmail}
      handlePassword={setPassword}
      handleSubmit={handleSubmit}
      email={email}
      password={password}
    />
  );
};

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
