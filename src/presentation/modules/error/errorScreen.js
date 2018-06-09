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

export class ErrorScreen extends React.PureComponent<PropsType> {
  dismiss = () => {
    // $FlowIgnoreNavigationComponentId
    dismissModal(this.props.componentId);
  };

  render() {
    const { error, title } = this.props;

    if (error) {
      console.log(error);
      console.warn(error.message ? error.message : 'Error without message');
    } else {
      console.warn('Error screen without error prop');
    }

    return (
      <ErrorComponent
        onButtonPress={this.dismiss}
        navigateBack={this.dismiss}
        buttonText={I18n.t('ERROR/BUTTON')}
        title={title}
        message={error ? error.message : ''}
      />
    );
  }
}
