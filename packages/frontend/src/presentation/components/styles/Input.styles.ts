import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../constants';

export const styles = StyleSheet.create({
  input: {
    height: Metrics.textInputHeight,
    padding: 8,
    backgroundColor: Colors.white,
    color: Colors.black,
    flex: 1,
    borderRadius: 4,
    fontFamily: 'Roboto',
  },
});
