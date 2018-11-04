// @flow strict

import Config from 'react-native-config';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { styles } from './styles/home.styles';

export type PropsType = {
  decrement: number => void,
  increment: number => void,
  navigateToLogin: () => void,
  logOut: () => void,
  instructions: string,
  counter: number,
  isLoggedIn: boolean,
};

export const Home = (props: PropsType) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {`${I18n.t('WORDS/GREETING')} Welcome to React Native!`}
    </Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{`This is a secret ${Config.TEST}`}</Text>
    <Text style={styles.instructions}>{props.instructions}</Text>
    <Icon name="rocket" size={30} color="#900" />
    <Text style={styles.instructions}>{props.counter}</Text>
    <Button
      onPress={() => props.increment(1)}
      title="INCREMENT"
      color="#841584"
    />
    <Button
      onPress={() => props.decrement(1)}
      title="DECREMENT"
      color="#841584"
    />
    {props.isLoggedIn ? (
      <Button onPress={props.logOut} title="LOGOUT" color="#841584" />
    ) : (
      <Button onPress={props.navigateToLogin} title="LOGIN" color="#841584" />
    )}
  </View>
);
