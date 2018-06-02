import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

export const Touchable = props => {
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
