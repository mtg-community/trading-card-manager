// @flow strict

import React from 'react';
import I18n from 'react-native-i18n';
import { dismissModal } from '../../navigation';
import { ErrorComponent } from './errorComponent';

type PropsType = {
  title: string,
  error: ?Error,
  componentId: string,
};

export const ErrorContainer = ({ error, componentId, title }: PropsType) => {
  const dismiss = () => {
    // $FlowIgnoreNavigationComponentId
    dismissModal(componentId);
  };

  if (error) {
    console.log(error);
    console.warn(error.message ? error.message : 'Error without message');
  } else {
    console.warn('Error screen without error prop');
  }

  return (
    <ErrorComponent
      onButtonPress={dismiss}
      navigateBack={dismiss}
      buttonText={I18n.t('ERROR/BUTTON')}
      title={title}
      message={error ? error.message : ''}
    />
  );
};

export const ErrorScreen = ErrorContainer;
