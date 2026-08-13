import { useEffect } from 'react';
import { isWhatsAppUrl, trackWhatsAppClick } from '../lib/meta-pixel';

/**
 * Instala un listener global de `click` en `document` (capture phase) que
 * detecta cualquier click cuyo target esté dentro de un `<a href="…">` que
 * apunte a WhatsApp, y dispara el evento `Contact` de Meta Pixel.
 *
 * ¿Por qué capture phase?
 *   Para correr ANTES de cualquier `preventDefault()` de react-router o de
 *   handlers propios — la atribución del evento no se puede perder.
 *
 * ¿Por qué `event.target.closest('a[href]')`?
 *   En este sitio hay CTAs donde el `<a>` envuelve un `<span>` (ícono +
 *   texto). Si solo matcheamos `event.target.matches('a')`, perderíamos
 *   esos clicks. `closest` sube el árbol hasta encontrar el `<a>` real.
 *
 * ¿Por qué cleanup con misma referencia + `useCapture=true`?
 *   `addEventListener` y `removeEventListener` deben coincidir en los
 *   tres argumentos (handler, useCapture). Si cleanup pasa `false`, el
 *   listener queda registrado y eventualmente duplica eventos.
 */
export const useWhatsAppClickTracker = (): void => {
  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!isWhatsAppUrl(href)) return;

      trackWhatsAppClick();
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);
};
