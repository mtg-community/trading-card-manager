import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    flex: 1,
    backgroundColor: '#ECE9DE',
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
  manaFont: {
    fontFamily: 'Mana-Font',
    fontSize: 16,
  },
  manaContainer: {
    padding: 4,
    borderRadius: 100,
  },
});
