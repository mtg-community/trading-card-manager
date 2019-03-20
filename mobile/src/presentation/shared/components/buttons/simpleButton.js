import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { func, string } from 'prop-types';
import { Touchable } from '../touchable';
import { styles } from './styles/buttons.style';

const ButtonLabel = ({ title, subtitle }) => {
  const { whiteTextSmall, whiteSubtitleSmall } = styles;
  if (subtitle) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={whiteTextSmall}>{title}</Text>
        <Text style={whiteSubtitleSmall}>{subtitle}</Text>
      </View>
    );
  }
  return <Text style={whiteTextSmall}>{title}</Text>;
};

export const SimpleButton = props => {
  const {
    primaryBackground,
    secondaryBackground,
    darkenOutline,
    simpleButton,
  } = styles;

  const dynamicColor = props.secondary
    ? secondaryBackground
    : primaryBackground;
  const style = StyleSheet.flatten([
    dynamicColor,
    simpleButton,
    darkenOutline,
    props.style,
  ]);
  return (
    <Touchable onPress={props.onPress} style={style}>
      <View>
        <ButtonLabel title={props.title} subtitle={props.subtitle} />
      </View>
    </Touchable>
  );
};

SimpleButton.propTypes = {
  title: string,
  subtitle: string,
  onPress: func.isRequired,
};
