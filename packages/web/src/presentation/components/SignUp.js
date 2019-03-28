import React from 'react';
import PropTypes from 'prop-types';

export const SignUpComponent = ({handleEmail,handlePassword,handleSubmit,password,email}) => {
    return (
        <form  onSubmit={(event) => handleSubmit(event)}>
            <input type="email" placeholder="email" value={email} onChange={(event) => handleEmail(event.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={ event => handlePassword(event.target.value) } />
            <button type="submit">Submit</button>
        </form>
    );
};

SignUpComponent.propTypes = {
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

SignUpComponent.displayName = 'SignUp';
