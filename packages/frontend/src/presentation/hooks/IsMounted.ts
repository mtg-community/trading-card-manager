import { useRef, useEffect } from 'react';

export function useIsMounted(): () => boolean {
  const isMounted = useRef<boolean>(false);

  useEffect(function() {
    isMounted.current = true;
    return function(): void {
      isMounted.current = false;
    };
  }, []);

  return (): boolean => isMounted.current;
}
