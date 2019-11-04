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
  },
  searchResult: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: Colors.black,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth - 16,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Metrics.screenWidth - 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Metrics.screenWidth - 16,
  },
  cardDetailsContent: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
});
