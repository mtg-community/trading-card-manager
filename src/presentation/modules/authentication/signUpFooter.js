// @flow strict

import * as React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import { styles } from './styles/footer.style';
import { FormOutlineButton } from '../theme/components/buttons';

export const SignUpFooter = (props: PropsType) => (
  <View>
    <FormOutlineButton
      title="Log In Instead"
      onPress={props.navigateToSignIn}
      style={styles.lastItemSpacing}
    />
  </View>
);

type PropsType = {
  navigateToSignIn: () => void,
};
