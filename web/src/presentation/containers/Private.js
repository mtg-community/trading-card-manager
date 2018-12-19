import React from 'react'
import {PrivateComponent} from "../components/Private";
import {selectUser} from "core";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

function PrivateContainer({user}) {
  if(!user)
    return <Redirect to="/"/>;
  return (
    <PrivateComponent user={user}/>
  )
}

const mapStateToProps = state => ({
  user: selectUser(state),
});

export const Private = connect(
  mapStateToProps
)(PrivateContainer);
