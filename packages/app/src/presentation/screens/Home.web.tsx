import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { Input } from '../components/Input';
import { Colors } from '../constants/colors';
import { useAuth } from './authentication/useAuth';

const signInWallPaper = require('../../../assets/images/signInWallpaper.jpg');

export const Home = () => {
  const [
    email,
    password,
    setEmail,
    setPassword,
    {
      actions: { signIn },
    },
  ] = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wallpaper}>
          <Image
            resizeMode="cover"
            resizeMethod="auto"
            style={styles.image}
            source={signInWallPaper}
          />
        </View>
        <View style={styles.form}>
          <Input
            value={email}
            autoCapitalize="none"
            placeholder="email"
            onChangeText={setEmail}
          />
          <Input
            value={password}
            autoCapitalize="none"
            secureTextEntry
            placeholder="********"
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonLabel}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 1000,
    height: 650,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  form: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    flex: 1,
    backgroundColor: Colors.white,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  wallpaper: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  button: {
    width: '100%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'red',
    maxWidth: 377,
  },
  buttonLabel: {
    fontSize: 16,
    color: Colors.white,
  },
});
