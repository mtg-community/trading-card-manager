import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import { authSelector } from '../../../domain/ducks/authenticationReducer';
import { NOT_LOGGED_IN_USER } from '../../../domain/entities/user';
import { Input } from '../../components/Input';
import { useAuth } from '../hooks/useAuth';
import { WelcomeStyles } from './welcome.styles';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const Welcome: React.FC<Props> = ({ navigation }: Props) => {
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
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
