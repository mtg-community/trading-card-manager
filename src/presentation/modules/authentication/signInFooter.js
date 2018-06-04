// @flow strict

import * as React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import I18n from 'react-native-i18n';

import { styles } from './styles/footer.style';
import { FormOutlineButton } from '../theme/components/buttons';

export const SignInFooter = (props: PropsType) => (
  <View>
    <FormOutlineButton
      title={I18n.t('SIGN_IN/FOOTER/SIGN_UP_BUTTON')}
      onPress={props.navigateToSignUp}
      style={styles.lastItemSpacing}
    />
    <View style={styles.textRow}>
      <Text style={styles.footnote}>
        {I18n.t('SIGN_IN/FOOTER/RECOVER_TEXT')}
      </Text>
      <TouchableWithoutFeedback onPress={props.navigateToForgotPassword}>
        <View>
          <Text style={styles.footnoteTextButton}>
            {I18n.t('SIGN_IN/FOOTER/RECOVER_LINK')}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
);

type PropsType = {
  navigateToForgotPassword: () => void,
  navigateToSignUp: () => void,
};
