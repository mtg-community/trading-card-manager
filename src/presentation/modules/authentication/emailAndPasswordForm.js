// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import PropTypes, { func } from 'prop-types';

import { FormHeader } from './formHeader';
import {
  TextInput,
  type TextInputRefType,
} from '../theme/components/textInput';
import { FormButton } from '../theme/components/buttons';
import { LoadingOverlay } from '../theme/components/loadingOverlay';
import { BackButtonFloating } from '../theme/components/buttons/backButtonFloating';

import { styles } from './styles/loginForm.style';
import { Colors } from '../theme/constants';

type PropsType = {
  footer: React.Node,
  onButtonPress: (string, string) => void,
  buttonText: string,
  alert: {
    showAlert: boolean,
    message: ?string,
  },
  navigateBack: () => void,
  clearAlerts: () => void,
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
  static defaultProps = { footer: <View /> };
  static propTypes = {
    footer: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string,
    }).isRequired,
    navigateBack: PropTypes.func.isRequired,
    clearAlerts: func.isRequired,
  };

  state = {
    email: '',
    password: '',
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

  componentWillReceiveProps(nextProps: PropsType) {
    const { showAlert, message } = nextProps.alert;
    if (showAlert) {
      alert(message);
      this.props.clearAlerts();
    }
  }

  focusPassword = () => {
    if (this.passwordInputRef) {
      this.passwordInputRef.focus();
    }
  };

  render() {
    return (
      <LoadingOverlay style={styles.screen} isLoading={this.state.loading}>
        <FormHeader title={'Sign In'} />
        <TextInput
          autoCapitalize="none"
          autoFocus
          blurOnSubmit={false}
          keyboardType="email-address"
          onChangeText={this.setEmail}
          onSubmitEditing={this.focusPassword}
          placeholder="Email address"
          returnKeyType={'next'}
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          value={this.state.email}
        />
        <TextInput
          onChangeText={this.setPassword}
          onSubmitEditing={this.onButtonPress}
          placeholder="Password"
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
