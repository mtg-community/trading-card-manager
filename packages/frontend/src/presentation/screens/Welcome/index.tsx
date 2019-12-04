import React, { useEffect } from 'react';
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

export const emailInputPlaceholder = 'something@domain.com';
export const passwordInputPlaceholder = '***********';
export const signInButtonLabel = 'Sign In';
export const signInWithGoogleButtonLabel = 'Sign In With Google';
export const signInWithFacebookButtonLabel = 'Sign In With Facebook';

export const Welcome: React.FC<Props> = (props: Props) => {
  const { navigation } = props;
  const { user } = useSelector(authSelector);
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
            label={signInWithFacebookButtonLabel}
            onPress={signInWithFacebook}
            isLoadingLabel="Signing"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label={signInWithGoogleButtonLabel}
            onPress={signInWithGoogle}
            isLoadingLabel="Signing"
          />
        </View>
        <Text>Email</Text>
        <View style={styles.inputContainer}>
          <Input
            value={email}
            autoCapitalize="none"
            placeholder={emailInputPlaceholder}
            onChangeText={handleChangeEmail}
          />
        </View>
        <Text>Password</Text>
        <View style={styles.inputContainer}>
          <Input
            value={password}
            autoCapitalize="none"
            secureTextEntry
            placeholder={passwordInputPlaceholder}
            onChangeText={handleChangePassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label={signInButtonLabel}
            onPress={signIn}
            isLoadingLabel="Signing"
          />
        </View>
      </View>
    </View>
  );
};
