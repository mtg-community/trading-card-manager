// @flow strict

import React from 'react';
import I18n from 'react-native-i18n';
import { dismissModal } from '../../navigation';
import { ErrorComponent } from './errorComponent';
import { Logger } from '../../../data/logger';

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
      Logger.log(error);
      Logger.warn(error.message ? error.message : 'Error without message');
    } else {
      Logger.warn('Error screen without error prop', process.env);
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
