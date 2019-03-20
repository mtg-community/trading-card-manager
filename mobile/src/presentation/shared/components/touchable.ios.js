// @flow strict

import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as TouchableWithoutFeedback from 'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback';

type PropsType = {
  ...TouchableWithoutFeedback.propTypes,
};

export const Touchable = (props: PropsType) => {
  return (
    <TouchableOpacity onPress={props.onPress} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};
