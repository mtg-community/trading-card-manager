// @flow strict

import React, { useState, useEffect } from 'react';
import { Image, ActivityIndicator, View } from 'react-native';
import { styles } from './styles/cardImage.styles';
import { getCardCropImage } from 'data/service/cardsService';

type PropTypes = {
  multiverseId: number,
};

export const CardImage = ({ multiverseId }: PropTypes) => {
  const [loading, setLoading] = useState(true);
  const [cropImage, setcropImage] = useState('');
  useEffect(() => {
    const cropCardImage = async () => {
      try {
        const art_crop = await getCardCropImage(multiverseId);
        setcropImage(art_crop);
      } catch (e) {
        console.log(e);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    cropCardImage();
  }, []);
  return (
    <View style={styles.container}>
      {!loading ? (
        <Image
          resizeMode="stretch"
          resizeMethod="auto"
          style={styles.container}
          source={{ uri: cropImage }}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};
