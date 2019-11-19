import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
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
      actions: { signIn },
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
        <View style={styles.inputContainer}>
          <Input
            value={email}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={handleChangeEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={password}
            autoCapitalize="none"
            secureTextEntry
            placeholder="Password"
            onChangeText={handleChangePassword}
          />
        </View>
        <Button label="Sign In" onPress={signIn} isLoadingLabel="Signing" />
      </View>
    </View>
  );
};
