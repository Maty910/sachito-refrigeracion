import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

const getInitial = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(QUERY).matches;
};

/**
 * Subscribes to the user's `prefers-reduced-motion` preference and returns
 * whether reduced motion is currently requested. Updates at runtime when
 * the OS-level setting changes.
 */
export const useReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState<boolean>(getInitial);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      setReduced(event.matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener('change', handleChange);
      return () => {
        mql.removeEventListener('change', handleChange);
      };
    }

    // Safari < 14 fallback.
    mql.addListener(handleChange);
    return () => {
      mql.removeListener(handleChange);
    };
  }, []);

  return reduced;
};