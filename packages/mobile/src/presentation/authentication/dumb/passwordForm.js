// @flow strict

import React, { useState } from 'react';
import I18n from 'react-native-i18n';
import { BackButtonFloating } from '../../shared/components/buttons/backButtonFloating';
import { FormButton } from '../../shared/components/buttons';
import { LoadingOverlay } from '../../shared/components/loadingOverlay';
import { TextInput } from '../../shared/components/textInput';
import { Colors } from '../../shared/theme';

import { FormHeader } from './formHeader';

import { styles } from './styles/form.style';

type PropTypes = {
  footer: ?React.Node,
  onButtonPress: string => Promise<void>,
  buttonText: string,
  title: string,
  navigateBack: () => void,
};

export const PasswordForm = (props: PropTypes) => {
  const [loading, setLoading] = useState(false);
  const [email, handleChangeEmail] = useState('');
  const onButtonPress = async () => {
    setLoading(true);
    await props.onButtonPress(email);
    setLoading(false);
  };
  return (
    <LoadingOverlay style={styles.screen} isLoading={loading}>
      <BackButtonFloating onPress={props.navigateBack} />
      <FormHeader title={props.title} />
      <TextInput
        autoCapitalize="none"
        autoFocus
        blurOnSubmit={false}
        keyboardType="email-address"
        onChangeText={handleChangeEmail}
        placeholder={I18n.t('WORDS/EMAIL_ADDRESS')}
        returnKeyType={'done'}
        selectionColor={Colors.secondary500}
        style={styles.itemSpacing}
        value={email}
      />
      <FormButton
        title={props.buttonText}
        onPress={onButtonPress}
        style={styles.itemSpacing}
      />
      {props.footer}
    </LoadingOverlay>
  );
};
