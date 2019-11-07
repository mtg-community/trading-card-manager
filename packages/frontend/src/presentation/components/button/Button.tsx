import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSetStateIfMounted } from '../../hooks/useSetStateIfMounted';
import source from '../../../../assets/animations/loading-animation.json';
import { Colors } from '../../constants';

interface ButtonProps {
  onPress: () => void;
  label: string;
  isLoadingLabel?: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    paddingVertical: 8,
    width: 180,
    borderRadius: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Roboto',
  },
});

enum ButtonState {
  IDLE,
  BUSY,
  FAILED,
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [state, setState] = useSetStateIfMounted<ButtonState>(ButtonState.IDLE);

  async function avoidClickingWhenPromiseIsResolving(): Promise<void> {
    try {
      if (state !== ButtonState.BUSY) {
        setState(ButtonState.BUSY);
        await props.onPress();
        setState(ButtonState.IDLE);
      }
    } catch (e) {
      setState(ButtonState.FAILED);
      console.info('Failed to execute button handler:');
      console.error(e);
    }
  }
  const label = state === ButtonState.BUSY ? props.isLoadingLabel : props.label;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={avoidClickingWhenPromiseIsResolving}
    >
      <View style={styles.buttonRow}>
        <View style={styles.buttonColumn}>
          <Text style={styles.buttonText}>{label}</Text>
        </View>
        {state === ButtonState.BUSY && (
          <View style={styles.buttonColumn}>
            <LottieView source={source} resizeMode="contain" autoPlay loop />
          </View>
        )}
      </View>
      {state === ButtonState.FAILED ? <Text>FAILED</Text> : null}
    </TouchableOpacity>
  );
};
