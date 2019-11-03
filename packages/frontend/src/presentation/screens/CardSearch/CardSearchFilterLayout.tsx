import React from 'react';
import { Input } from '../../components/Input';
import { View } from 'react-native';
import { Button } from '../../components/button/Button';

interface Props {
  onSubmitFilter: () => Promise<void>;
  cardName: string;
  setCardName: (cardName: string) => void;
}

export const CardSearchFilterLayout: React.FC<Props> = (props: Props) => {
  const { onSubmitFilter, cardName, setCardName } = props;
  return (
    <View>
      <View>
        <Input
          value={cardName}
          autoCapitalize="none"
          placeholder="Card Name"
          onChangeText={setCardName}
        />
        <Button onPress={onSubmitFilter} label="Search" />
      </View>
    </View>
  );
};
