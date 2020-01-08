import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { styles } from './styles';
import { Color } from '../../../domain/entities/Color';
import { ManaCheckboxRow } from '../../components/ManaCheckboxRow';
import { ActiveFilters } from '../../components/activeFilters/ActiveFilters';
import { Supertype } from '../../../domain/entities/Supertype';
import { Subtype } from '../../../domain/entities/Subtype';

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
    cardName: string;
    colors: Color[];
    colorIdentities: Color[];
    supertype: Supertype;
    subtype: Subtype;
  };
}

export const SEARCH_INPUT_PLACEHOLDER = 'cardSearch:searchInputPlaceholder';
export const SUBTYPE_INPUT_PLACEHOLDER = 'cardSearch:subtypeInputPlaceholder';
export const SUPERTYPE_INPUT_PLACEHOLDER =
  'cardSearch:supertypeInputPlaceholder';
export const SEARCH_BUTTON_TEXT = 'cardSearch:searchButtonLabel';

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
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.cardSearchContainer}>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input
            value={cardName}
            autoCapitalize="none"
            placeholder={t(SEARCH_INPUT_PLACEHOLDER)}
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
              placeholder={t(SUBTYPE_INPUT_PLACEHOLDER)}
              onChangeText={setSubtype}
            />
          </View>
          <View style={{ ...styles.autoCompleteInputContainer, marginLeft: 2 }}>
            <Input
              value={supertype}
              autoCapitalize="none"
              placeholder={t(SUPERTYPE_INPUT_PLACEHOLDER)}
              onChangeText={setSupertype}
            />
          </View>
        </View>
        <Text style={styles.regularText}>
          {t('cardSearch:manaColorCheckboxRowTitle')}
        </Text>
        <ManaCheckboxRow colors={colors} setColors={setColors} />
        <Text style={styles.regularText}>
          {t('cardSearch:manaIdentityCheckboxRowTitle')}
        </Text>
        <ManaCheckboxRow
          colors={colorIdentities}
          setColors={setColorIdentities}
        />
        <ActiveFilters testID="ActiveFilters" activefilters={filters} />
      </View>
      <Button
        onPress={onSubmitFilter}
        label={t(SEARCH_BUTTON_TEXT)}
        loadingLabel={t('cardSearch:searchButtonLoadingLabel')}
      />
    </SafeAreaView>
  );
};
