// @flow strict

import React, { useState} from 'react';
import { View, Alert } from 'react-native';
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

export type PropsType = {
  footer: ?React.Node,
  onButtonPress: (string, string) => Promise<void>,
  buttonText: string,
  title: string,
  navigateBack: () => void,
};

export const EmailAndPasswordForm = (props: PropsType) => {
  const [email, setEmail] = useState('eduardomoroni@gmail.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const handleChangeEmail = (email: string) => setEmail(email);
  const handleChangePassword = (password: string) => setPassword(password);
  return (
    <LoadingOverlay style={styles.screen} isLoading={loading}>
      <FormHeader title={props.title} />
      <TextInput
        autoCapitalize="none"
        autoFocus
        blurOnSubmit={false}
        keyboardType="email-address"
        onChangeText={handleChangeEmail}
        placeholder={I18n.t('WORDS/EMAIL_ADDRESS')}
        returnKeyType={'next'}
        selectionColor={Colors.secondary500}
        style={styles.itemSpacing}
        value={email}
      />
      <TextInput
        onChangeText={handleChangePassword}
        // onSubmitEditing={this.onButtonPress}
        placeholder={I18n.t('WORDS/PASSWORD')}
        returnKeyType={'done'}
        secureTextEntry
        selectionColor={Colors.secondary500}
        style={styles.itemSpacing}
        value={password}
      />
      <FormButton
        title={props.buttonText}
        onPress={() => Alert.alert('Apertou')}
        style={styles.itemSpacing}
      />
      {props.footer}
      <BackButtonFloating onPress={props.navigateBack} />
    </LoadingOverlay>
  )
};
