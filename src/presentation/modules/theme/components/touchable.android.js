// @flow strict

import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

import * as TouchableWithoutFeedback from 'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback';

type PropsType = {
  ...TouchableWithoutFeedback.propTypes,
};

export const Touchable = (props: PropsType) => {
  const background = props.borderless
    ? TouchableNativeFeedback.SelectableBackgroundBorderless()
    : TouchableNativeFeedback.SelectableBackground();
  return (
    <TouchableNativeFeedback
      background={background}
      onPress={props.onPress}
      {...props}
    >
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  );
};
