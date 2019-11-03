import { Dispatch, SetStateAction, useState } from 'react';
import { useIsMounted } from './IsMounted';

// ReturnType<typeof useState<T>>, but this syntax is not available yet
type UseSetStateIfMountedType<T> = [T, Dispatch<SetStateAction<T>>];

export function useSetStateIfMounted<T>(
  initialState: T | (() => T),
): UseSetStateIfMountedType<T> {
  const isMounted = useIsMounted();
  const [state, setState] = useState<T>(initialState);

  function safeSetState(state: SetStateAction<T>): void {
    if (isMounted()) {
      return setState(state);
    }
  }

  return [state, safeSetState];
}
