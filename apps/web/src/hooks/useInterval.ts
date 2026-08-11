import { useEffect, useRef } from 'react';

/**
 * Runs `callback` every `delay` ms while `enabled` is true. Pass
 * `delay: null` (or `enabled: false`) to pause the timer completely.
 * The timer is fully cleaned up on unmount or dependency change.
 */
export const useInterval = (
  callback: () => void,
  delay: number | null,
  enabled: boolean,
): void => {
  const savedCallback = useRef<() => void>(callback);

  // Keep the latest callback without resetting the timer on every render.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled || delay === null) return;

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [enabled, delay]);
};