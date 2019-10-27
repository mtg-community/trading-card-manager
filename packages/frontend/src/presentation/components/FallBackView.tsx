import React from 'react';
import LottieView from 'lottie-react-native';
import { Button, Text, View } from 'react-native';
import { Updates } from 'expo';
import { styles } from './styles/FallBackView.styles';

export const FallBackView = ({ error, info }: any) => (
  <View style={styles.errorMessageContainer}>
    <LottieView
      source={require('../../../assets/animations/error-boundary.json')}
      resizeMode="contain"
      autoPlay
      loop
    />
    <Text style={styles.messageText}>
      The following error was caught by an ErrorBoundary and sent to Bugsnag.
    </Text>
    <Button title="Reload" onPress={() => Updates.reload()} />
    <Text style={styles.errorStackText}>{error.message}</Text>
    <Text style={styles.errorStackText}>{info.componentStack}</Text>
  </View>
);
