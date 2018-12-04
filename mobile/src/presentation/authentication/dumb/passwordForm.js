// @flow strict

import PropTypes, { func } from 'prop-types';
import * as React from 'react';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import { BackButtonFloating } from '../../components/buttons/backButtonFloating';
import { FormButton } from '../../components/buttons';
import { LoadingOverlay } from '../../components/loadingOverlay';
import { TextInput } from '../../components/textInput';
import { Colors } from '../../theme';

import { FormHeader } from './formHeader';

import { styles } from './styles/form.style';

type PropsType = {
  footer: ?React.Node,
  onButtonPress: string => Promise<void>,
  buttonText: string,
  title: string,
  navigateBack: () => void,
};

type StateType = {
  email: string,
  loading: boolean,
};

export class PasswordForm extends React.Component<PropsType, StateType> {
  static propTypes = {
    footer: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    navigateBack: PropTypes.func.isRequired,
  };
  static defaultProps = {
    footer: <View />,
  };

  state = {
    email: '',
    loading: false,
  };

  setEmail = (email: string) => this.setState({ email });

  onButtonPress = async () => {
    this.setState({ loading: true });
    const { email } = this.state;
    await this.props.onButtonPress(email);
    this.setState({ loading: false });
  };

  render() {
    return (
      <LoadingOverlay style={styles.screen} isLoading={this.state.loading}>
        <BackButtonFloating onPress={this.props.navigateBack} />
        <FormHeader title={this.props.title} />
        <TextInput
          autoCapitalize="none"
          autoFocus
          blurOnSubmit={false}
          keyboardType="email-address"
          onChangeText={this.setEmail}
          placeholder={I18n.t('WORDS/EMAIL_ADDRESS')}
          returnKeyType={'done'}
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          value={this.state.email}
        />
        <FormButton
          title={this.props.buttonText}
          onPress={this.onButtonPress}
          style={styles.itemSpacing}
        />
        {this.props.footer}
      </LoadingOverlay>
    );
  }
}
