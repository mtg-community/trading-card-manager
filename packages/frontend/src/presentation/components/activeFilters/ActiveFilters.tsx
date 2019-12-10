import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { Color } from '../../../domain/entities/Color';
import { styles } from './styles';
import { Supertype } from '../../../domain/entities/Supertype';
import { Subtype } from '../../../domain/entities/Subtype';
import { CardNameFilter } from './CardNameFIlter';
import { ColorsFilter } from './ColorFilter';
import { SubtypeFilter } from './SubtypeFilter';
import { SupertypeFilter } from './SupertypeFilter';

interface Props {
  activefilters: {
    cardName: string;
    colors: Color[];
    colorIdentities: Color[];
    supertype: Supertype;
    subtype: Subtype;
  };
  testID: string;
}

export const ActiveFilters: React.FC<Props> = (props: Props) => {
  const {
    colors,
    colorIdentities,
    cardName,
    supertype,
    subtype,
  } = props.activefilters;
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text> {t('activefilters:title')}</Text>
      <CardNameFilter cardName={cardName} />
      <SubtypeFilter subtype={subtype} />
      <SupertypeFilter supertype={supertype} />
      <ColorsFilter colors={colors} />
      <ColorsFilter colors={colorIdentities} />
    </View>
  );
};
