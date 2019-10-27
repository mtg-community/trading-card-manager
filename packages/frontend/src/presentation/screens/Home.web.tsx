import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Input } from '../components/Input';
import { useAuth } from './authentication/useAuth';
import { HomeStyles } from './Home.css';
import signInWallPaper from '../../../assets/images/signInWallpaper.jpg';

export const Home: React.FC = () => {
  const styles = HomeStyles;
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
