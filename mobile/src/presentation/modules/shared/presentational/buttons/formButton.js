import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles/buttons.style';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { Colors, Metrics } from '../../../theme/constants';
import { func } from 'prop-types';

const ButtonLabel = ({ title, subtitle }) => {
  const { whiteTextCenter, whiteSubtitleCenter } = styles;
  if (subtitle) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={whiteTextCenter}>{title}</Text>
        <Text style={whiteSubtitleCenter}>{subtitle}</Text>
      </View>
    );
  }
  return <Text style={whiteTextCenter}>{title}</Text>;
};

export const FormButton = props => {
  const {
    primaryButton,
    secondaryButton,
    darkenOutline,
    infoWrap,
    iconWrap,
  } = styles;

  const dynamicColor = props.secondary ? secondaryButton : primaryButton;
  const style = StyleSheet.flatten([dynamicColor, darkenOutline, props.style]);
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={style}
      underlayColor={Colors.primary700}
    >
      <View style={infoWrap}>
        <ButtonLabel title={props.title} subtitle={props.subtitle} />
        {props.icon && (
          <View style={iconWrap}>
            <Icon
              name={'barcode-scan'}
              color={Colors.white}
              size={Metrics.icons.medium}
              style={{ textAlign: 'center' }}
            />
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

FormButton.propTypes = {
  onPress: func.isRequired,
};
