import React from 'react';
import { connect } from 'react-redux';
import {  selectUser } from 'core';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

export const authenticationHoc = Component => ({user}) => {
  return user ? <Component user={user}/> : <Redirect to="/signIn"/>
};

const mapStateToProps = state => ({
  user: selectUser(state),
});

export const withAuthentication = compose(
  connect(mapStateToProps),
  authenticationHoc
);
