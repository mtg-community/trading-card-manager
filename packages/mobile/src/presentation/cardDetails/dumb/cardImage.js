// @flow strict

import React, { useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles/cardImage.styles';

type PropTypes = {
  multiverseId: number,
  style: View.propTypes.style,
};

export const CardImage = ({ multiverseId, style }: PropTypes) => {
  const [loading, setLoading] = useState(false);
  const IMG_URL = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseId}&type=card`;
  const renderSpinner = () =>
    loading ? (
      <ActivityIndicator style={styles.spinner} size="large" />
    ) : (
      <View />
    );

  return (
    <View style={style || styles.container}>
      <Image
        resizeMode="contain"
        resizeMethod="scale"
        style={styles.image}
        source={{ uri: IMG_URL }}
        onLoad={() => setLoading(false)}
        onError={error => console.info('Error while loading card image', error)}
      />
      {renderSpinner()}
    </View>
  );
};
