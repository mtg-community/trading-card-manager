import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Colors, Metrics } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  content: {
    padding: 8,
    width: Metrics.screenWidth - 16,
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 8,
  },
  picker: {
    width: '100%',
    marginVertical: 8,
    backgroundColor: Colors.white,
  }
});
