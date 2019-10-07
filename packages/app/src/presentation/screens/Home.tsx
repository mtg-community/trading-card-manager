import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from 'react-native-dotenv';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { authSelector } from '../../domain/ducks/authenticationReducer';
import { Input } from '../components/Input';
import { logInAsync } from 'expo-google-app-auth';
import {
  createGoogleCredential,
  signInWithCredential,
} from '../../data/firebase/authentication';

export const Home = () => {
  useEffect(() => {
    handleSignInWithGoogle();
  }, []);
  const handleSignInWithGoogle = async () => {
    try {
      const { accessToken, idToken } = await logInAsync({
        clientId: '',
        iosClientId: GOOGLE_IOS_CLIENT_ID,
        androidClientId: GOOGLE_ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
      const credential = createGoogleCredential(idToken);
      const res = await signInWithCredential({ providerId: '' });
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);
  const [email, handleChangeEmail] = useState('');
  const [password, handleChangePassword] = useState('');
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
