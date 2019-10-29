import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    flex: 1,
    backgroundColor: '#ECE9DE',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
