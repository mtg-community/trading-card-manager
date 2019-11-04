import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../constants';

export const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.primary,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: Metrics.screenWidth - 16,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 8,
  },
  button: {
    marginVertical: 12,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 100,
    backgroundColor: Colors.black,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.white,
  },
});
