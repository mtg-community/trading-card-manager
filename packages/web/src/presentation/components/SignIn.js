import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SignInComponent = ({
  handleEmail,
  handlePassword,
  handleSubmit,
  password,
  email
}) => {
  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={event => handleEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={event => handlePassword(event.target.value)}
      />
      <button type="submit">Submit</button>
      <Link to="/private">Go to private</Link>
    </form>
  );
};

SignInComponent.propTypes ={
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

SignInComponent.displayName = 'SignIn';
