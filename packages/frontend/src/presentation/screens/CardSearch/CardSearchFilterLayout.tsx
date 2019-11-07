import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { styles } from './styles';

interface Props {
  onSubmitFilter: () => Promise<void>;
  cardName: string;
  setCardName: (cardName: string) => void;
  subtype: string;
  setSubtype: (subtype: string) => void;
  supertype: string;
  setSupertype: (supertype: string) => void;
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
  } = props;
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
      </View>
      <Button
        onPress={onSubmitFilter}
        label="Search"
        isLoadingLabel="Searching"
      />
    </SafeAreaView>
  );
};
