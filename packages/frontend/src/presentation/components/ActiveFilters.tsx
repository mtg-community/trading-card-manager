import React from 'react';
import { View, Text } from 'react-native';
import { Color } from '../../domain/entities/Color';
import { styles } from './styles/ActiveFilters.styles';
import { ManaCost } from './ManaCost';

interface Props {
  activefilters: {
    cardName?: string;
    colors?: Color[];
    colorIdentities?: Color[];
    supertype: string;
    subtype: string;
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
  function renderColorsFilter(): React.ReactElement | null {
    if (!colors || !colors.length) {
      return null;
    }
    return (
      <View style={styles.filtersRow}>
        <Text>Colors:</Text>
        {colors.map(color => (
          <ManaCost key={color} manaCost={color} />
        ))}
      </View>
    );
  }
  function renderColorIdentitiesFilter(): React.ReactElement | null {
    if (!colorIdentities || !colorIdentities.length) {
      return null;
    }
    return (
      <View style={styles.filtersRow}>
        <Text>Color Identities:</Text>
        {colorIdentities.map(color => (
          <ManaCost key={color} manaCost={color} />
        ))}
      </View>
    );
  }
  function renderCardNameFilter(): React.ReactElement | null {
    if (!cardName) {
      return null;
    }
    return (
      <View style={styles.filtersRow}>
        <Text>Card Name:</Text>
        <Text>{cardName}</Text>
      </View>
    );
  }
  function renderSupertypeFilter(): React.ReactElement | null {
    if (!supertype) {
      return null;
    }
    return (
      <View style={styles.filtersRow}>
        <Text>Supertype:</Text>
        <Text>{supertype}</Text>
      </View>
    );
  }
  function renderSubtypeFilter(): React.ReactElement | null {
    if (!subtype) {
      return null;
    }
    return (
      <View style={styles.filtersRow}>
        <Text>Subtype:</Text>
        <Text>{subtype}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Active Filters:</Text>
      {renderCardNameFilter()}
      {renderSubtypeFilter()}
      {renderSupertypeFilter()}
      {renderColorsFilter()}
      {renderColorIdentitiesFilter()}
    </View>
  );
};
