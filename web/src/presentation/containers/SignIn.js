import React from 'react';
import { connect } from 'react-redux';
import { loginAction, selectUser } from 'core';
import { SignInComponent } from '../components/SignIn';
import PropTypes from 'prop-types';
import { showModal } from '../components/Modal';
import { useCredentialsHook } from './hooks';

const onError = error => {
  showModal('SignIn Error', error.message);
};

const SignInContainer = props => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  } = useCredentialsHook(props.logIn, onError);

  return (
    <SignInComponent
      handleEmail={setEmail}
      handlePassword={setPassword}
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      user={props.user}
    />
  );
};

const mapStateToProps = state => ({
  user: selectUser(state),
});

const mapDispatchToProps = {
  logIn: loginAction,
};

SignInContainer.propTypes = {
  user: PropTypes.object,
  logIn: PropTypes.func.isRequired,
};

export const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);
