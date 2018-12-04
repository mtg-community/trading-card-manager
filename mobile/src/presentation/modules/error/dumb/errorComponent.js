// @flow strict

import React from 'react';
import { View, Text } from 'react-native';
import { FormHeader } from 'presentation/modules/authentication/dumb/formHeader';
import {
  FormButton,
  BackButtonFloating,
} from 'presentation/modules/shared/dumb';

import { styles } from './styles/errorComponent.style';

type PropsType = {
  onButtonPress: () => void,
  navigateBack: () => void,
  buttonText: string,
  title: string,
  message: ?string,
};

export const ErrorComponent = (props: PropsType) => {
  return (
    <View style={styles.container}>
      <BackButtonFloating onPress={props.navigateBack} />
      <FormHeader title={props.title} />
      <Text style={styles.message}>{props.message}</Text>
      <FormButton title={props.buttonText} onPress={props.onButtonPress} />
    </View>
  );
};

ErrorComponent.defaultProps = {
  message: '',
};
