// @flow strict

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pop } from '../../navigation';
import { ErrorComponent } from './errorComponent';

type PropsType = {};

export const ErrorContainer = (props: PropsType) => {
  const navigateBack = () => {
    // $FlowIgnoreNavigationComponentId
    pop(props.componentId);
  };

  return (
    <ErrorComponent
      onButtonPress={() => {}}
      navigateBack={navigateBack}
      buttonText={'BOTAO'}
      title={'ERROR GRAVE'}
    />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const ErrorScreen = connect(mapStateToProps, mapDispatchToProps)(
  ErrorContainer,
);
