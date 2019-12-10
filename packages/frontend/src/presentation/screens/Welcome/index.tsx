import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { authSelector } from '../../../domain/ducks/authenticationReducer';
import { NOT_LOGGED_IN_USER } from '../../../domain/entities/user';
import { Input } from '../../components/Input';
import { useAuth } from '../hooks/useAuth';
import { WelcomeStyles } from './welcome.styles';
import { Button } from '../../components/button/Button';
import {
  CompositeNavigationProp,
  NavigationHelpers,
  ParamListBase,
} from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamListBase, 'Welcome'>,
    NavigationHelpers<ParamListBase>
  >;
}

export const EMAIL_INPUT_PLACEHOLDER = 'welcome:emailInputPlaceholder';
export const PASSWORD_INPUT_PLACEHOLDER = '***********';
export const SIGN_IN_BUTTON_LABEL = 'welcome:signInButtonLabel';
export const SIGN_IN_WITH_GOOGLE_BUTTON_LABEL =
  'welcome:signInWithGoogleButtonLabel';
export const SIGN_IN_WITH_FACEBOOK_BUTTON_LABEL =
  'welcome:signInWithFacebookButtonLabel';

export const Welcome: React.FC<Props> = (props: Props) => {
  const { navigation } = props;
  const { user } = useSelector(authSelector);
  const { t } = useTranslation();
  const styles = WelcomeStyles;
  const [
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    {
      actions: { signInWithGoogle, signIn, signInWithFacebook },
    },
  ] = useAuth();
  useEffect(() => {
    if (user !== NOT_LOGGED_IN_USER) {
      navigation.navigate('Home');
    }
  }, [user]);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.buttonContainer}>
          <Button
            label={t(SIGN_IN_WITH_FACEBOOK_BUTTON_LABEL)}
            onPress={signInWithFacebook}
            loadingLabel={t('welcome:loadingLabel')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label={t(SIGN_IN_WITH_GOOGLE_BUTTON_LABEL)}
            onPress={signInWithGoogle}
            loadingLabel={t('welcome:loadingLabel')}
          />
        </View>
        <Text>{t('welcome:emailInputTitle')}</Text>
        <View style={styles.inputContainer}>
          <Input
            value={email}
            autoCapitalize="none"
            placeholder={t(EMAIL_INPUT_PLACEHOLDER)}
            onChangeText={handleChangeEmail}
          />
        </View>
        <Text>{t('welcome:passwordInputTitle')}</Text>
        <View style={styles.inputContainer}>
          <Input
            value={password}
            autoCapitalize="none"
            secureTextEntry
            placeholder={PASSWORD_INPUT_PLACEHOLDER}
            onChangeText={handleChangePassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label={t(SIGN_IN_BUTTON_LABEL)}
            onPress={signIn}
            loadingLabel={t('welcome:loadingLabel')}
          />
        </View>
      </View>
    </View>
  );
};
