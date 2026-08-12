import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/meta-pixel';

/**
 * Dispara el evento `PageView` de Meta Pixel en el mount inicial y en
 * cada cambio de `pathname`.
 *
 * ¿Por qué `[pathname]` y NO `[location]`?
 *   Cambios de query (`?foo=bar`) y hash (`#hash`) NO disparan PageView.
 *   Si nos atáramos al objeto `location` completo, cada cambio de search
 *   generaría un evento duplicado que Meta deduplica pero que ensucia las
 *   métricas.
 *
 * Nota sobre React 19 + StrictMode en dev:
 *   El useEffect puede ejecutarse dos veces en el primer mount bajo
 *   StrictMode. Meta Pixel deduplica por timestamp + URL internamente,
 *   así que aceptamos ese doble-firing en dev sin afectar producción.
 */
export const usePageViewTracker = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView();
  }, [pathname]);
};
