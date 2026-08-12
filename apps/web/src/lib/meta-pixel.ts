/**
 * Meta Pixel — capa fina de integración con el SDK de Facebook (`fbq`).
 *
 * Responsabilidades:
 *   1) Exponer constantes estables (Pixel ID, regex de WhatsApp).
 *   2) Detectar si un href es de WhatsApp (`wa.me`, `api.whatsapp.com`,
 *      `whatsapp.com`).
 *   3) Disparar los eventos estándar que el contrato Themis aprobó:
 *        - `Contact`   → cuando un usuario hace click en un link de WhatsApp.
 *        - `PageView`  → en mount y en cada cambio de pathname.
 *
 * Todas las funciones son no-op si `window.fbq` no existe (ej. SSR,
 * bloqueo por ad-blocker, snippet del index.html aún no ejecutado).
 */

export const META_PIXEL_ID = '1251666283689768';

/**
 * Regex case-insensitive que matchea los dominios de WhatsApp soportados
 * por la landing. Se mantiene conservador: si en el futuro entran nuevos
 * dominios (ej. `web.whatsapp.com`) basta extender este regex.
 */
export const WHATSAPP_URL_REGEX = /(?:wa\.me|api\.whatsapp\.com|whatsapp\.com)/i;

/**
 * Firma mínima del objeto `fbq` que plantamos en `window`. Modelamos
 * solo lo que necesitamos: una función callable más las propiedades que
 * el snippet oficial del Pixel deja expuestas (`queue`, `loaded`, etc.).
 */
export type FbqFn = (event: string, ...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

/**
 * Devuelve `true` si el `href` apunta a un link de WhatsApp reconocido
 * por la regex. Acepta `null`/`undefined`/string vacío para uso defensivo
 * desde listeners que reciben `getAttribute('href')`.
 */
export const isWhatsAppUrl = (href: string | null | undefined): boolean => {
  if (typeof href !== 'string' || href.length === 0) return false;
  return WHATSAPP_URL_REGEX.test(href);
};

/**
 * Dispara el evento `Contact` cuando el usuario clickea un link de
 * WhatsApp. No-op si `window.fbq` no está definido.
 */
export const trackWhatsAppClick = (): void => {
  if (!window.fbq) return;
  window.fbq('track', 'Contact');
};

/**
 * Dispara el evento `PageView` en cada navegación. No-op si `window.fbq`
 * no está definido.
 */
export const trackPageView = (): void => {
  if (!window.fbq) return;
  window.fbq('track', 'PageView');
};
