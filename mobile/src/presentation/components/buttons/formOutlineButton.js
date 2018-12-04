import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Metrics, Colors } from '../../theme';
import { styles } from './styles/buttons.style';
import { func } from 'prop-types';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

const ButtonLabel = ({ title, subtitle, style }) => {
  if (subtitle) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.subtitle}>{subtitle}</Text>
      </View>
    );
  }
  return <Text style={style.title}>{title}</Text>;
};

export const FormOutlineButton = props => {
  const {
    transparentButton,
    primaryOutline,
    secondaryOutline,
    primaryTextCenter,
    primarySubtitle,
    secondaryTextCenter,
    secondarySubtitle,
    infoWrap,
    iconWrap,
  } = styles;

  const underlayColor = props.secondary
    ? Colors.secondary700
    : Colors.primary700;
  const outlineStyle = props.secondary ? secondaryOutline : primaryOutline;
  const [textStyle, subtitleStyle, iconColor] = props.secondary
    ? [secondaryTextCenter, secondarySubtitle, Colors.secondary500]
    : [primaryTextCenter, primarySubtitle, Colors.primary500];

  const style = StyleSheet.flatten([
    transparentButton,
    outlineStyle,
    props.style,
  ]);
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={style}
      underlayColor={underlayColor}
    >
      <View style={infoWrap}>
        <ButtonLabel
          style={{ title: textStyle, subtitle: subtitleStyle }}
          title={props.title}
          subtitle={props.subtitle}
        />
        {props.icon && (
          <View style={iconWrap}>
            <Icon
              name={'barcode-scan'}
              color={iconColor}
              size={Metrics.icons.medium}
              style={{ textAlign: 'center' }}
            />
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

FormOutlineButton.propTypes = {
  onPress: func.isRequired,
};
