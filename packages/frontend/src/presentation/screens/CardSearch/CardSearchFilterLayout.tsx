import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';
import { Color } from '../../../domain/entities/Color';

interface Props {
  onSubmitFilter: () => Promise<void>;
  cardName: string;
  setCardName: (cardName: string) => void;
  subtype: string;
  setSubtype: (subtype: string) => void;
  supertype: string;
  setSupertype: (supertype: string) => void;
  colors: Array<Color>;
  setColors: (colors: Color[]) => void;
  colorIdentities: Array<Color>;
  setColorIdentities: (colorIdentities: Color[]) => void;
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
  function handleSelectColor(color: Color): void {
    if (colors.includes(color)) {
      setColors(colors.filter(elem => elem !== color));
    } else {
      setColors(colors.concat(color));
    }
  }
  function handleSelectColorIdentity(colorIdentity: Color): void {
    if (colorIdentities.includes(colorIdentity)) {
      setColorIdentities(
        colorIdentities.filter(color => color !== colorIdentity),
      );
    } else {
      setColorIdentities(colorIdentities.concat(colorIdentity));
    }
  }
  const ManaIdentityCheckbox: React.FC<{
    color: Color;
    isSelected: boolean;
  }> = (props: { color: Color; isSelected: boolean }) => {
    const { color, isSelected } = props;
    const renderContent = (): React.ReactNode =>
      !isSelected ? (
        <ManaCost manaCost={color} />
      ) : (
        <Ionicons name="ios-checkmark" size={26} />
      );
    return (
      <TouchableOpacity
        accessibilityHint={`manaIdentityCheckboxColor:${color}`}
        style={styles.manaButton}
        onPress={(): void => {
          handleSelectColorIdentity(color);
        }}
      >
        {renderContent()}
      </TouchableOpacity>
    );
  };
  const ManaColorCheckbox: React.FC<{
    color: Color;
    isSelected: boolean;
  }> = (props: { color: Color; isSelected: boolean }) => {
    const { color, isSelected } = props;
    const renderContent = (): React.ReactNode =>
      !isSelected ? (
        <ManaCost manaCost={color} />
      ) : (
        <Ionicons name="ios-checkmark" size={26} />
      );
    return (
      <TouchableOpacity
        accessibilityHint={`manaColorCheckboxColor:${color}`}
        style={styles.manaButton}
        onPress={(): void => {
          handleSelectColor(color);
        }}
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
          <ManaColorCheckbox
            color={Color.W}
            isSelected={colors.includes(Color.W)}
          />
          <ManaColorCheckbox
            color={Color.B}
            isSelected={colors.includes(Color.B)}
          />
          <ManaColorCheckbox
            color={Color.R}
            isSelected={colors.includes(Color.R)}
          />
          <ManaColorCheckbox
            color={Color.U}
            isSelected={colors.includes(Color.U)}
          />
          <ManaColorCheckbox
            color={Color.G}
            isSelected={colors.includes(Color.G)}
          />
          <ManaColorCheckbox
            color={Color.C}
            isSelected={colors.includes(Color.C)}
          />
        </View>
        <Text style={styles.regularText}>Color Identity</Text>
        <View style={styles.manaRow}>
          <ManaIdentityCheckbox
            color={Color.W}
            isSelected={colors.includes(Color.W)}
          />
          <ManaIdentityCheckbox
            color={Color.B}
            isSelected={colors.includes(Color.B)}
          />
          <ManaIdentityCheckbox
            color={Color.R}
            isSelected={colors.includes(Color.R)}
          />
          <ManaIdentityCheckbox
            color={Color.U}
            isSelected={colors.includes(Color.U)}
          />
          <ManaIdentityCheckbox
            color={Color.G}
            isSelected={colors.includes(Color.G)}
          />
          <ManaIdentityCheckbox
            color={Color.C}
            isSelected={colors.includes(Color.C)}
          />
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
