import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Colors, Metrics } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.white,
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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  inputGroup: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 8,
  },
  autoCompleteInputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  picker: {
    width: '100%',
    marginVertical: 8,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    fontFamily: 'Roboto',
  },
  searchResult: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardNavBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth,
    padding: 8,
    backgroundColor: Colors.black,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth - 16,
  },
  manaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 8,
  },
  manaButton: {
    borderRadius: 4,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
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
  regularText: {
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});
