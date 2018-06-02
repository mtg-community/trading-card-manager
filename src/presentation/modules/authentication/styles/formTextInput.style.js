import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../theme/constants';

export const styles = StyleSheet.create({
  textInput: {
    ...Fonts.style.input,
    height: Metrics.inputHeight,
    color: Colors.gray900,
    borderColor: Colors.gray200alt,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.marginHorizontal,
  },
  invalidInput: {
    borderColor: Colors.fire,
  },
});
