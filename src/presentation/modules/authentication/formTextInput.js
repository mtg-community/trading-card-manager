import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../theme/constants';

import { styles } from './styles/formTextInput.style';
import { styles as loginStyles } from './styles/loginForm.style';

export class FormTextInput extends Component {
  static defaultProps = {
    validationCondition: () => true,
  };

  focus = () => this.input.focus();

  render() {
    const isValidInput = this.props.validationCondition(this.props.value);
    const styleArray = [
      loginStyles.itemSpacing,
      styles.textInput,
      this.props.style,
    ];

    if (!isValidInput) {
      styleArray.push(styles.invalidInput);
    }

    return (
      <TextInput
        autoCapitalize="words"
        {...this.props}
        ref={ref => {
          this.input = ref;
        }}
        style={StyleSheet.flatten(styleArray)}
        selectionColor={Colors.secondary500}
        underlineColorAndroid={'transparent'}
      />
    );
  }
}
