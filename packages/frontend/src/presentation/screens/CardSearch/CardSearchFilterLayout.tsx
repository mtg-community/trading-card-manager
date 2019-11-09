import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';

interface Props {
  onSubmitFilter: () => Promise<void>;
  cardName: string;
  setCardName: (cardName: string) => void;
  subtype: string;
  setSubtype: (subtype: string) => void;
  supertype: string;
  setSupertype: (supertype: string) => void;
  colors: Array<string>;
  setColors: (colors: Array<string>) => void;
  colorIdentities: Array<string>;
  setColorIdentities: (colorIdentities: Array<string>) => void;
}

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
  } = props;
  function handleSelectColor(color: string): void {
    if (colors.includes(color)) {
      return setColors(colors.filter(elem => elem != color));
    }
    return setColors(colors.concat(color));
  }
  function handleSelectColorIdentity(colorIdentity: string): void {
    if (colorIdentities.includes(colorIdentity)) {
      return setColorIdentities(
        colorIdentities.filter(color => color != colorIdentity),
      );
    }
    return setColorIdentities(colorIdentities.concat(colorIdentity));
  }
  const ManaIdentityCheckbox: React.FC<{ color: string }> = (props: {
    color: string;
  }) => {
    const { color } = props;
    const renderContent = () =>
      !colorIdentities.includes(color) ? (
        <ManaCost manaCost={color} />
      ) : (
        <Ionicons name="ios-checkmark" size={26} />
      );
    return (
      <TouchableOpacity
        accessibilityHint={`manaIdentityCheckboxColor:${color}`}
        style={styles.manaButton}
        onPress={() => handleSelectColorIdentity(color)}
      >
        {renderContent()}
      </TouchableOpacity>
    );
  };
  const ManaColorCheckbox: React.FC<{
    color: string;
    isSelected: boolean;
  }> = (props: { color: string; isSelected: boolean }) => {
    const { color, isSelected } = props;
    const renderContent = () =>
      !isSelected ? (
        <ManaCost manaCost={color} />
      ) : (
        <Ionicons name="ios-checkmark" size={26} />
      );
    return (
      <TouchableOpacity
        accessibilityHint={`manaColorCheckboxColor:${color}`}
        style={styles.manaButton}
        onPress={() => handleSelectColor(color)}
      >
        {renderContent()}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input
            value={cardName}
            autoCapitalize="none"
            placeholder="Card Name"
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
              placeholder="Sub(Type)"
              onChangeText={setSubtype}
            />
          </View>
          <View style={{ ...styles.autoCompleteInputContainer, marginLeft: 2 }}>
            <Input
              value={supertype}
              autoCapitalize="none"
              placeholder="Super(Type)"
              onChangeText={setSupertype}
            />
          </View>
        </View>
        <Text style={styles.regularText}>Color</Text>
        <View style={styles.manaRow}>
          <ManaColorCheckbox color="W" isSelected={colors.includes('W')} />
          <ManaColorCheckbox color="B" isSelected={colors.includes('B')} />
          <ManaColorCheckbox color="R" isSelected={colors.includes('R')} />
          <ManaColorCheckbox color="U" isSelected={colors.includes('U')} />
          <ManaColorCheckbox color="G" isSelected={colors.includes('G')} />
          <ManaColorCheckbox color="C" isSelected={colors.includes('C')} />
        </View>
        <Text style={styles.regularText}>Color Identity</Text>
        <View style={styles.manaRow}>
          <ManaIdentityCheckbox color="W" />
          <ManaIdentityCheckbox color="B" />
          <ManaIdentityCheckbox color="R" />
          <ManaIdentityCheckbox color="U" />
          <ManaIdentityCheckbox color="G" />
          <ManaIdentityCheckbox color="C" />
        </View>
      </View>
      <Button
        onPress={onSubmitFilter}
        label="Search"
        isLoadingLabel="Searching"
      />
    </SafeAreaView>
  );
};
