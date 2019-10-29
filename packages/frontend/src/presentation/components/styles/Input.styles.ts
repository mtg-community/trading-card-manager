import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../constants';

export const styles = StyleSheet.create({
  input: {
    height: Metrics.textInputHeight,
    padding: 8,
    borderRadius: 5,
    backgroundColor: Colors.white,
    color: Colors.black,
    flex: 1,
    fontFamily: 'Roboto-Regular',
    margin: 8,
  },
});
