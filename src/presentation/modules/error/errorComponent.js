// @flow strict

import React from 'react';
import { View } from 'react-native';
import { FormHeader } from '../authentication/formHeader';
import { FormButton } from '../theme/components/buttons';
import { BackButtonFloating } from '../theme/components/buttons/backButtonFloating';

import { styles } from './styles/errorComponent.style';

type PropsType = {
  onButtonPress: () => void,
  navigateBack: () => void,
  buttonText: string,
  title: string,
};

export const ErrorComponent = (props: PropsType) => {
  return (
    <View style={styles.container}>
      <BackButtonFloating onPress={props.navigateBack} />
      <FormHeader title={props.title} />
      <FormButton title={props.buttonText} onPress={props.onButtonPress} />
    </View>
  );
};
