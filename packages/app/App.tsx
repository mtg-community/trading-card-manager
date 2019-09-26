import React from 'react'
import { Provider} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { initializeDomainLayer } from './src/domain'
import { initializeDataLayer } from './src/data'

initializeDataLayer()
const store = initializeDomainLayer()

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
