import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles/ManaCost.styles';
import { Mana } from '../../domain/entities/Mana';
import { Colors } from '../constants';

type Props = {
  manaCost: string;
};

export const ManaCost: React.FC<Props> = ({ manaCost }: Props) => {
  const curlyBracesRegex = /[{}]+/;
  const manaStrings = manaCost.split(curlyBracesRegex).filter(mana => !!mana);
  const manaSymbols = manaStrings.map(
    (manaString: string): Mana => new Mana(manaString),
  );
  const getBackgroundColor = (mana: string): string => {
    if (mana == 'W') {
      return Colors.whiteManaBackground;
    }
    if (mana == 'B') {
      return Colors.blackManaBackground;
    }
    if (mana == 'R') {
      return Colors.redManaBackground;
    }
    if (mana == 'U') {
      return Colors.blueManaBackground;
    }
    if (mana == 'G') {
      return Colors.greenManaBackground;
    }
    return Colors.numberManaBackground;
  };
  return (
    <View style={styles.container}>
      {manaSymbols.map(mana => (
        <View
          key={Math.random()}
          style={StyleSheet.flatten([
            styles.manaContainer,
            {
              backgroundColor: getBackgroundColor(mana.cost),
            },
          ])}
        >
          <Text style={styles.mana}>{mana.toSymbol()}</Text>
        </View>
      ))}
    </View>
  );
};
