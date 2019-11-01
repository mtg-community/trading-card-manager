import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE9DE',
    paddingTop: Constants.statusBarHeight,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
    backgroundColor: Colors.white,
    margin: 12,
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  searchResults: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  resultsItem: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderColor: '#ECE9DE',
    borderBottomWidth: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  manaFont: {
    fontFamily: 'Mana-Font',
    fontSize: 12,
  },
  manaContainer: {
    padding: 4,
    borderRadius: 100,
  },
});
