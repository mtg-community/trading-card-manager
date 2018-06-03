// @flow strict

import * as React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import { styles } from './styles/signInFooter.style';
import { FormOutlineButton } from '../theme/components/buttons';

export const SignInFooter = (props: PropsType) => (
  <View>
    <FormOutlineButton
      title="Create an Account"
      onPress={props.navigateToSignUp}
      style={styles.lastItemSpacing}
    />
    <View style={styles.textRow}>
      <Text style={styles.footnote}>Forgot your password?</Text>
      <TouchableWithoutFeedback onPress={props.navigateToForgotPassword}>
        <View>
          <Text style={styles.footnoteTextButton}>Recover it here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
);

type PropsType = {
  navigateToForgotPassword: () => void,
  navigateToSignUp: () => void,
};
