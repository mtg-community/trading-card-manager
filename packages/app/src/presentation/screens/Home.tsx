import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { signIn } from '../../domain/ducks/authenticationReducer';
import { Input } from '../components/Input';

export const Home = () => {
  const dispatch = useDispatch();
  const [email, handleChangeEmail] = useState('');
  const [password, handleChangePassword] = useState('');
  const handleSignIn = () => {
    dispatch(signIn({ password, email }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          value={email}
          autoCapitalize="none"
          placeholder="email"
          onChangeText={handleChangeEmail}
        />
        <Input
          value={password}
          autoCapitalize="none"
          secureTextEntry
          placeholder="********"
          onChangeText={handleChangePassword}
        />
        <TouchableOpacity onPress={handleSignIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: Dimensions.get('window').width - 16,
  },
});
