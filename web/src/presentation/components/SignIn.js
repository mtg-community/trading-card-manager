import React from 'react';
import {Link} from "react-router-dom";

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
