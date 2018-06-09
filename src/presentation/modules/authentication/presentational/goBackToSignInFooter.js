// @flow strict

import * as React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import I18n from 'react-native-i18n';

import { styles } from './styles/footer.style';
import { FormOutlineButton } from '../../theme/presentational/buttons/index';

export const GoBackToSignInFooter = (props: PropsType) => (
  <View>
    <FormOutlineButton
      title={I18n.t('AUTH/FOOTER/SIGN_IN_BUTTON')}
      onPress={props.navigateToSignIn}
      style={styles.lastItemSpacing}
    />
  </View>
);

type PropsType = {
  navigateToSignIn: () => void,
};
