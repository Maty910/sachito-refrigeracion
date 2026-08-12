import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  META_PIXEL_ID,
  WHATSAPP_URL_REGEX,
  isWhatsAppUrl,
  trackWhatsAppClick,
  trackPageView,
} from './meta-pixel';

describe('META_PIXEL_ID', () => {
  it('1) equals the Meta Pixel ID string del contrato Themis', () => {
    expect(META_PIXEL_ID).toBe('1251666283689768');
  });

  it('2) es un string de dígitos puros (no contiene letras ni símbolos)', () => {
    expect(typeof META_PIXEL_ID).toBe('string');
    expect(META_PIXEL_ID).toMatch(/^\d+$/);
  });
});

describe('WHATSAPP_URL_REGEX', () => {
  it('3) matchea URLs con dominio wa.me en minúsculas', () => {
    expect(WHATSAPP_URL_REGEX.test('https://wa.me/5491123456789')).toBe(true);
  });

  it('4) matchea URLs con dominio WA.ME en mayúsculas (case-insensitive /i)', () => {
    expect(WHATSAPP_URL_REGEX.test('https://WA.ME/5491123456789')).toBe(true);
  });

  it('5) matchea URLs con api.whatsapp.com', () => {
    expect(WHATSAPP_URL_REGEX.test('https://api.whatsapp.com/send?phone=5491123456789')).toBe(true);
  });

  it('6) matchea URLs con whatsapp.com', () => {
    expect(WHATSAPP_URL_REGEX.test('https://whatsapp.com/send?text=hola')).toBe(true);
  });

  it('7) NO matchea URLs de google.com (defensa contra falsos positivos)', () => {
    expect(WHATSAPP_URL_REGEX.test('https://google.com')).toBe(false);
  });

  it('8) NO matchea mailto: (defensa)', () => {
    expect(WHATSAPP_URL_REGEX.test('mailto:test@example.com')).toBe(false);
  });
});

describe('isWhatsAppUrl()', () => {
  it('9) retorna true para href wa.me real-world con query string', () => {
    expect(isWhatsAppUrl('https://wa.me/5491123456789?text=Hola')).toBe(true);
  });

  it('10) retorna false para href null (defensa null guard)', () => {
    expect(isWhatsAppUrl(null)).toBe(false);
  });

  it('11) retorna false para href undefined (defensa null guard)', () => {
    expect(isWhatsAppUrl(undefined)).toBe(false);
  });

  it('12) retorna false para href string vacío (defensa null guard)', () => {
    expect(isWhatsAppUrl('')).toBe(false);
  });
});

describe('trackWhatsAppClick()', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'fbq', {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
  });

  afterEach(() => {
    Reflect.deleteProperty(window, 'fbq');
  });

  it('13) cuando window.fbq existe, llama fbq("track", "Contact")', () => {
    trackWhatsAppClick();
    const fbq = window.fbq as unknown as ReturnType<typeof vi.fn>;
    expect(fbq).toHaveBeenCalledTimes(1);
    expect(fbq).toHaveBeenCalledWith('track', 'Contact');
  });

  it('14) cuando window.fbq no existe, no-op (no throw)', () => {
    Reflect.deleteProperty(window, 'fbq');
    expect(() => trackWhatsAppClick()).not.toThrow();
  });
});

describe('trackPageView()', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'fbq', {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
  });

  afterEach(() => {
    Reflect.deleteProperty(window, 'fbq');
  });

  it('15) cuando window.fbq existe, llama fbq("track", "PageView")', () => {
    trackPageView();
    const fbq = window.fbq as unknown as ReturnType<typeof vi.fn>;
    expect(fbq).toHaveBeenCalledTimes(1);
    expect(fbq).toHaveBeenCalledWith('track', 'PageView');
  });

  it('16) cuando window.fbq no existe, no-op (no throw)', () => {
    Reflect.deleteProperty(window, 'fbq');
    expect(() => trackPageView()).not.toThrow();
  });
});
