import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSetStateIfMounted } from '../../hooks/useSetStateIfMounted';

interface ButtonProps {
  onPress: () => void;
  label: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
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

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={avoidClickingWhenPromiseIsResolving}
    >
      <Text>{state === ButtonState.BUSY ? 'Wait' : props.label}</Text>
      {state === ButtonState.FAILED ? <Text>FAILED</Text> : null}
    </TouchableOpacity>
  );
};
