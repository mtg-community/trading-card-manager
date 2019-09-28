import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Dimensions }  from 'react-native'
import { authSelector } from '../../domain/ducks/authenticationReducer'

export const Home = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(authSelector)
  const [email, handleChangeEmail] = useState('')
  const [password,handleChangePassword] = useState('')
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={styles.form}>
        <TextInput
          value={email}
          style={styles.input}
          autoCapitalize='none'
          placeholder='email'
          onChangeText={handleChangeEmail}
          placeholderTextColor='#A5A5A5'
        />
        <TextInput
          style={styles.input}
          value={password}
          autoCapitalize='none'
          secureTextEntry
          placeholder="********"
          onChangeText={handleChangePassword}
          placeholderTextColor='#A5A5A5'
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 36,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#253F58',
    color: '#00CBFF',
    width: '100%',
    maxWidth: 377,
    marginVertical: 8,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: Dimensions.get('window').width - 16,
  }
});
