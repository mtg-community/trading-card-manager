// @flow strict

import React, { Component } from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { Colors } from '../theme';

import { styles } from './styles/textInput.style';

type Props = {
  value: string,
  validationCallback: string => boolean,
  style?: TextInput.propTypes.style,
};

export type TextInputRefType = { focus: () => void };

export class TextInput extends Component<Props> {
  _ref: ?TextInputRefType;
  static defaultProps = {
    validationCallback: () => true,
  };

  focus = () => {
    if (this._ref) {
      this._ref.focus();
    }
  };

  render() {
    const { value, style, validationCallback } = this.props;
    const isValidInput = validationCallback(value);
    const styleArray = [styles.itemSpacing, styles.textInput, style];

    if (!isValidInput) {
      styleArray.push(styles.invalidInput);
    }

    return (
      <RNTextInput
        autoCapitalize="words"
        {...this.props}
        style={StyleSheet.flatten(styleArray)}
        selectionColor={Colors.secondary500}
        underlineColorAndroid={'transparent'}
        ref={ref => {
          this._ref = ref;
        }}
      />
    );
  }
}
