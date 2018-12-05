// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import PropTypes, { func } from 'prop-types';
import I18n from 'react-native-i18n';

import { FormHeader } from './formHeader';
import {
  TextInput,
  type TextInputRefType,
} from '../../shared/components/textInput';
import { FormButton } from '../../shared/components/buttons';
import { LoadingOverlay } from '../../shared/components/loadingOverlay';
import { BackButtonFloating } from '../../shared/components/buttons/backButtonFloating';

import { styles } from './styles/form.style';
import { Colors } from '../../shared/theme';

type PropsType = {
  footer: ?React.Node,
  onButtonPress: (string, string) => Promise<void>,
  buttonText: string,
  title: string,
  navigateBack: () => void,
};

type StateType = {
  email: string,
  password: string,
  loading: boolean,
};

export class EmailAndPasswordForm extends React.Component<
  PropsType,
  StateType,
> {
  passwordInputRef: ?TextInputRefType;
  static propTypes = {
    footer: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    navigateBack: PropTypes.func.isRequired,
  };
  static defaultProps = {
    footer: <View />,
  };

  state = {
    email: 'eduardomoroni@gmail.com',
    password: '123456',
    loading: false,
  };

  setEmail = (email: string) => this.setState({ email });
  setPassword = (password: string) => this.setState({ password });

  onButtonPress = async () => {
    this.setState({ loading: true });
    const { email, password } = this.state;
    await this.props.onButtonPress(email, password);
    this.setState({ loading: false });
  };

  focusPassword = () => {
    if (this.passwordInputRef) {
      this.passwordInputRef.focus();
    }
  };

  render() {
    return (
      <LoadingOverlay style={styles.screen} isLoading={this.state.loading}>
        <FormHeader title={this.props.title} />
        <TextInput
          autoCapitalize="none"
          autoFocus
          blurOnSubmit={false}
          keyboardType="email-address"
          onChangeText={this.setEmail}
          onSubmitEditing={this.focusPassword}
          placeholder={I18n.t('WORDS/EMAIL_ADDRESS')}
          returnKeyType={'next'}
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          value={this.state.email}
        />
        <TextInput
          onChangeText={this.setPassword}
          onSubmitEditing={this.onButtonPress}
          placeholder={I18n.t('WORDS/PASSWORD')}
          ref={ref => {
            this.passwordInputRef = ref;
          }}
          returnKeyType={'done'}
          secureTextEntry
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          value={this.state.password}
        />
        <FormButton
          title={this.props.buttonText}
          onPress={this.onButtonPress}
          style={styles.itemSpacing}
        />
        {this.props.footer}
        <BackButtonFloating onPress={this.props.navigateBack} />
      </LoadingOverlay>
    );
  }
}
