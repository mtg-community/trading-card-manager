import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.screen,
    justifyContent: 'center',
  },
  signUpContainer: {
    flex: 1,
    backgroundColor: Colors.screen,
    paddingTop: Metrics.section,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.marginVertical * 3,
  },
  title: {
    ...Fonts.style.title,
    color: Colors.gray900,
  },
  image: {
    resizeMode: 'contain',
  },
  centralized: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'space-between',
  },
  bdayLabel: {
    paddingHorizontal: Metrics.marginHorizontal * 1.5,
    marginBottom: 5,
  },
  bdayText: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal / 2,
    color: Colors.gray500,
  },
  inputRow: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.marginHorizontal * 1.5,
  },
  inlineInput: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal / 2,
  },
  inlineInputTriple: {
    flex: 3,
    marginHorizontal: Metrics.marginHorizontal / 2,
  },
  itemSpacing: {
    marginHorizontal: Metrics.marginHorizontal * 2,
    marginBottom: Metrics.marginVertical,
  },
  buttonsSpacing: {
    paddingVertical: Metrics.marginVertical,
    borderTopWidth: Metrics.borderWidth,
    borderColor: Colors.divider,
  },
  loginButton: {
    flex: 1,
    marginVertical: Metrics.marginVertical,
  },
  lastItemSpacing: {
    marginHorizontal: Metrics.marginHorizontal * 2,
  },
});
