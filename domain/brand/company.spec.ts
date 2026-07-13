import { describe, it, expect } from 'vitest';
import { COMPANY } from './company';

describe('COMPANY identity contract', () => {
  describe('name', () => {
    it('mantiene el nombre comercial "SC Refrigeración"', () => {
      expect(COMPANY.name.commercial).toBe('SC Refrigeración');
    });

    it('mantiene el nombre legal', () => {
      expect(COMPANY.name.legal).toBe('SC Refrigeración');
    });
  });

  describe('contact', () => {
    it('expone email con formato válido', () => {
      expect(COMPANY.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('expone número de WhatsApp con formato internacional E.164 (+ prefijado)', () => {
      expect(COMPANY.contact.whatsapp.number).toMatch(/^\+\d{10,15}$/);
    });

    it('expone un mensaje default de WhatsApp con contenido real', () => {
      expect(COMPANY.contact.whatsapp.defaultMessage).toMatch(/\S/);
    });
  });

  describe('social', () => {
    it.each<[keyof typeof COMPANY.social, RegExp]>([
      ['instagram', /^https:\/\/www\.instagram\.com\//],
      ['tiktok', /^https:\/\/www\.tiktok\.com\//],
    ])('expone %s con URL https válida en su plataforma', (platform, pattern) => {
      expect(COMPANY.social[platform]).toMatch(pattern);
    });
  });

  describe('text content not empty', () => {
    it.each([
      ['location.city', COMPANY.location.city],
      ['location.coverage', COMPANY.location.coverage],
      ['brand.tagline', COMPANY.brand.tagline],
      ['brand.serviceRole', COMPANY.brand.serviceRole],
    ])('%s no está vacío ni en blanco', (_label, value) => {
      expect(value).toMatch(/\S/);
    });
  });
});
