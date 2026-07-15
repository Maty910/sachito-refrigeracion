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

    describe('whatsapp.messages', () => {
      it.each([
        ['default', COMPANY.contact.whatsapp.messages.default],
        ['schedule', COMPANY.contact.whatsapp.messages.schedule],
        ['urgency', COMPANY.contact.whatsapp.messages.urgency],
        ['consult', COMPANY.contact.whatsapp.messages.consult],
      ])('%s no está vacío ni en blanco', (_label, value) => {
        expect(value).toMatch(/\S/);
      });

      it('service es una función que produce un mensaje no vacío con el título del servicio', () => {
        const exampleTitle = 'Instalación de equipo de frío';
        const result = COMPANY.contact.whatsapp.messages.service(exampleTitle);
        expect(result).toMatch(/\S/);
        expect(result).toContain(exampleTitle);
      });
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

  describe('brand.tagline y serviceRole', () => {
    it('expone el tagline actualizado con la promesa de "equipo de frío"', () => {
      expect(COMPANY.brand.tagline).toBe('Tu equipo de frío en las mejores manos.');
    });

    it('expone el serviceRole como "Servicio Técnico Especializado"', () => {
      expect(COMPANY.brand.serviceRole).toBe('Servicio Técnico Especializado');
    });
  });

  describe('COMPANY.brand.logo', () => {
    describe('header', () => {
      it('expone un path público que comienza con "/"', () => {
        expect(COMPANY.brand.logo.header).toMatch(/^\//);
      });

      it('expone un path no vacío ni en blanco', () => {
        expect(COMPANY.brand.logo.header).toMatch(/\S/);
      });

      it('apunta a un asset con extensión .webp', () => {
        expect(COMPANY.brand.logo.header).toMatch(/\.webp$/i);
      });
    });

    describe('footerLogo', () => {
      it('existe como string no vacío', () => {
        expect(COMPANY.brand.logo.footerLogo).toMatch(/\S/);
      });

      it('expone un path público que comienza con "/"', () => {
        expect(COMPANY.brand.logo.footerLogo).toMatch(/^\//);
      });

      it('apunta a un asset con extensión .webp (case-insensitive)', () => {
        expect(COMPANY.brand.logo.footerLogo).toMatch(/\.webp$/i);
      });
    });

    describe('favicon', () => {
      it.each([
        ['webp', COMPANY.brand.logo.favicon.webp],
        ['ico', COMPANY.brand.logo.favicon.ico],
      ])('expone %s como path público que comienza con "/"', (_label, path) => {
        expect(path).toMatch(/^\//);
      });

      it.each([
        ['webp', COMPANY.brand.logo.favicon.webp],
        ['ico', COMPANY.brand.logo.favicon.ico],
      ])('expone %s como path no vacío ni en blanco', (_label, path) => {
        expect(path).toMatch(/\S/);
      });

      it.each<[string, string, RegExp]>([
        ['webp', COMPANY.brand.logo.favicon.webp, /\.webp$/i],
        ['ico', COMPANY.brand.logo.favicon.ico, /\.ico$/i],
      ])('expone %s apuntando a un asset con la extensión correspondiente', (_label, path, pattern) => {
        expect(path).toMatch(pattern);
      });

      it('webp e ico apuntan a assets distintos (no son el mismo archivo)', () => {
        expect(COMPANY.brand.logo.favicon.webp).not.toBe(COMPANY.brand.logo.favicon.ico);
      });
    });

    it('footerLogo y favicon.ico apuntan a assets distintos (separación semántica footer vs favicon)', () => {
      expect(COMPANY.brand.logo.footerLogo).not.toBe(COMPANY.brand.logo.favicon.ico);
    });
  });
});
