import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from 'core';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  user: selectUser(state),
});

export const withAuthentication = Component => {
  const componentWithAuthenticationChecker = ({ user }) =>
    user ? <Component user={user} /> : <Redirect to="/signIn" />;
  return connect(mapStateToProps)(componentWithAuthenticationChecker);
};
