import React, { useState } from 'react';
import { View, SafeAreaView, Picker } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';

interface Props {
  onSubmitFilter: () => Promise<void>;
  cardName: string;
  setCardName: (cardName: string) => void;
}

export const CardSearchFilterLayout: React.FC<Props> = (props: Props) => {
  const { onSubmitFilter, cardName, setCardName } = props;
  const [type, setType] = useState('');
  const [format, setFormat] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ManaCost manaCost="{3}{W}{U}" />
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
        <Picker
          style={styles.picker}
          selectedValue={type}
          onValueChange={(itemValue: string): void => setType(itemValue)}
        >
          <Picker.Item label="Type" value="" />
          <Picker.Item label="Basic" value="basic" />
          <Picker.Item label="Conspiracy" value="conspiracy" />
          <Picker.Item label="Creature" value="creature" />
          <Picker.Item label="Enchantment" value="enchantment" />
          <Picker.Item label="Instant" value="instant" />
          <Picker.Item label="Land" value="land" />
          <Picker.Item label="Legendary" value="legendary" />
          <Picker.Item label="Planeswalker" value="planeswalker" />
          <Picker.Item label="Sorcery" value="sorcery" />
          <Picker.Item label="Summon" value="summon" />
          <Picker.Item label="Tribal" value="tribal" />
          <Picker.Item label="Vanguard" value="vanguard" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={format}
          onValueChange={(itemValue: string): void => setFormat(itemValue)}
        >
          <Picker.Item label="Format" value="" />
          <Picker.Item label="Brawl" value="brawl" />
          <Picker.Item label="Commander" value="commander" />
          <Picker.Item label="Legacy" value="legacy" />
          <Picker.Item label="Modern" value="modern" />
          <Picker.Item label="Pauper" value="pauper" />
          <Picker.Item label="Pionner" value="pionner" />
          <Picker.Item label="Standard" value="standard" />
          <Picker.Item label="Vintage" value="vintage" />
        </Picker>
      </View>
      <Button onPress={onSubmitFilter} label="Search" />
    </SafeAreaView>
  );
};
