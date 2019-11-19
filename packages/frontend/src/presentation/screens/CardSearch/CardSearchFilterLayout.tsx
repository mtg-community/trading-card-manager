import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { styles } from './styles';
import { Color } from '../../../domain/entities/Color';
import { ManaCheckboxRow } from '../../components/ManaCheckboxRow';
import { ActiveFilters } from '../../components/ActiveFilters';

interface Props {
  onSubmitFilter: () => Promise<void>;
  cardName: string;
  setCardName: (cardName: string) => void;
  subtype: string;
  setSubtype: (subtype: string) => void;
  supertype: string;
  setSupertype: (supertype: string) => void;
  colors: Color[];
  setColors: (colors: Color[]) => void;
  colorIdentities: Color[];
  setColorIdentities: (colorIdentities: Color[]) => void;
  filters: {
    cardName?: string;
    colors?: Color[];
    colorIdentities?: Color[];
    supertype: string;
    subtype: string;
  };
}

export const SEARCH_INPUT_PLACEHOLDER = 'Card Name';
export const SUBTYPE_INPUT_PLACEHOLDER = 'Sub(Type)';
export const SUPERTYPE_INPUT_PLACEHOLDER = 'Super(Type)';
export const SEARCH_BUTTON_TEXT = 'Search';

export const CardSearchFilterLayout: React.FC<Props> = (props: Props) => {
  const {
    onSubmitFilter,
    cardName,
    setCardName,
    subtype,
    supertype,
    setSubtype,
    setSupertype,
    colors,
    setColors,
    colorIdentities,
    setColorIdentities,
    filters,
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input
            value={cardName}
            autoCapitalize="none"
            placeholder={SEARCH_INPUT_PLACEHOLDER}
            onChangeText={setCardName}
            returnKeyType="search"
            onSubmitEditing={onSubmitFilter}
          />
        </View>
        <View style={styles.inputGroup}>
          <View
            style={{ ...styles.autoCompleteInputContainer, marginRight: 2 }}
          >
            <Input
              value={subtype}
              autoCapitalize="none"
              placeholder={SUBTYPE_INPUT_PLACEHOLDER}
              onChangeText={setSubtype}
            />
          </View>
          <View style={{ ...styles.autoCompleteInputContainer, marginLeft: 2 }}>
            <Input
              value={supertype}
              autoCapitalize="none"
              placeholder={SUPERTYPE_INPUT_PLACEHOLDER}
              onChangeText={setSupertype}
            />
          </View>
        </View>
        <Text style={styles.regularText}>Color</Text>
        <ManaCheckboxRow colors={colors} setColors={setColors} />
        <Text style={styles.regularText}>Color Identity</Text>
        <ManaCheckboxRow
          colors={colorIdentities}
          setColors={setColorIdentities}
        />
        <ActiveFilters testID="ActiveFilters" activefilters={filters} />
      </View>
      <Button
        onPress={onSubmitFilter}
        label={SEARCH_BUTTON_TEXT}
        isLoadingLabel="Searching"
      />
    </SafeAreaView>
  );
};
