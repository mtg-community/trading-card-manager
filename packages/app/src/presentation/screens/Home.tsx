import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Input } from '../components/Input';
import { useAuth } from './authentication/useAuth';

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

export function Home(): React.ReactNode {
  const [
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    {
      actions: { signIn },
    },
  ] = useAuth();

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
        <TouchableOpacity onPress={signIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
