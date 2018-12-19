import React from 'react'
import {PrivateComponent} from "../components/Private";
import {selectUser} from "core";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

function PrivateContainer(props) {
  if(!props.user)
    return <Redirect to="/"/>;
  return (
    <PrivateComponent user={props.user}/>
  )
}

const mapStateToProps = state => ({
  user: selectUser(state),
});

export const Private = connect(
  mapStateToProps
)(PrivateContainer);

export const withAuthentication = (Component) => {
  const componentWithAuthenticationCheck = (
    <Something>
      <Component />
    </Something>
  )
  return connect(mapStateToProps)(componentWithAuthenticationCheck);
};
