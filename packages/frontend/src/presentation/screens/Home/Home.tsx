import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { querySampleCard } from '../../../data/graphql/queries/SampleCardList';
import { Card } from '../../../domain/entities/Card';
import { Mana } from '../../../domain/entities/mana';

export const Home: React.FC = () => {
  const [name, handleChangeName] = useState<string>('');
  const [results, setResults] = useState([]);
  // const [superType, handleSuperType] = useState<string>('');
  // const [type, handleChangeType] = useState<string>('');
  // const [text, handleChangeText] = useState<string>('');
  // const [types, handleChangeTypes] = useState<string>('all');
  // const [words, handleChangeWords] = useState<string>('all');
  useEffect(() => {
    querySampleCard().then((res: Card): void =>
      setResults(results.concat(res)),
    );
  }, []);
  const renderItem = ({ item }: { item: Card }) => {
    const manaCost = new Mana(item.manaCost).toSymbol();
    return (
      <View style={styles.resultsItem}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.manaFont}>{manaCost}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputWrapper}>
          <Ionicons name="ios-search" size={28} />
          <Input
            value={name}
            onChangeText={handleChangeName}
            placeholder="Name"
            returnKeyType="search"
          />
          <TouchableOpacity>
            <Ionicons name="ios-mic" size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchResults}>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={item => item.multiverseId.toString()}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
