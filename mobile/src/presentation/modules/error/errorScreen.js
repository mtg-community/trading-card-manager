// @flow

import * as React from 'react';
import I18n from 'react-native-i18n';
import { Navigator } from '../../navigator';
import { ErrorComponent } from './presentational/errorComponent';
import { Logger } from '../../../data/logger';

type PropsType = {
  title: string,
  error: ?Error,
  componentId: string,
  navigator: Navigator,
};

type StatesType = {
  navigator: Navigator,
};

export class ErrorScreen extends React.Component<PropsType, StatesType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      // $FlowIgnoreNavigationComponentId
      navigator: new Navigator(props.componentId),
    };
  }

  dismiss = () => {
    this.state.navigator.dismissModal();
  };

  render() {
    const { error, title } = this.props;

    if (error) {
      Logger.log(error);
      Logger.warn(error.message ? error.message : 'Error without message');
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
