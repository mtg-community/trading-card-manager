import { StyleSheet } from 'react-native';
import { Metrics } from '../../constants/metrics';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: Metrics.textInputHeight,
    padding: 8,
    borderRadius: 5,
    backgroundColor: Colors.textInputBackgroundColor,
    color: Colors.textInputColor,
    width: '100%',
    maxWidth: 377,
    marginVertical: 8,
  },
});
