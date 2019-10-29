import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';

export const Home: React.FC = () => {
  const [name, handleChangeName] = useState<string>('');
  // const [superType, handleSuperType] = useState<string>('');
  // const [type, handleChangeType] = useState<string>('');
  // const [text, handleChangeText] = useState<string>('');
  // const [types, handleChangeTypes] = useState<string>('all');
  // const [words, handleChangeWords] = useState<string>('all');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input
          value={name}
          onChangeText={handleChangeName}
          placeholder="Name"
          returnKeyType="search"
        />
      </View>
    </View>
  );
};
