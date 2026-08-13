import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { useWhatsAppClickTracker } from './useWhatsAppClickTracker';
import { trackWhatsAppClick } from '../lib/meta-pixel';

vi.mock('../lib/meta-pixel', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../lib/meta-pixel')>();
  return {
    ...actual,
    trackWhatsAppClick: vi.fn(),
  };
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

function TrackerProbe(): null {
  useWhatsAppClickTracker();
  return null;
}

function Harness(): React.JSX.Element {
  return (
    <div>
      <a href="https://wa.me/5491123456789" data-testid="wa-link">
        WhatsApp wa.me
      </a>
      <a href="https://api.whatsapp.com/send?phone=5491123456789" data-testid="wa-api-link">
        WhatsApp api
      </a>
      <a href="https://google.com" data-testid="google-link">
        Google
      </a>
      <a href="https://wa.me/9999" data-testid="wa-with-span">
        <span data-testid="wa-span-child">Icon + text</span>
      </a>
    </div>
  );
}

describe('useWhatsAppClickTracker', () => {
  it('1) click en <a href="wa.me"> llama trackWhatsAppClick una vez', () => {
    render(
      <>
        <TrackerProbe />
        <Harness />
      </>,
    );

    fireEvent.click(screen.getByTestId('wa-link'));

    expect(trackWhatsAppClick).toHaveBeenCalledTimes(1);
  });

  it('2) click en <a href="api.whatsapp.com"> llama trackWhatsAppClick', () => {
    render(
      <>
        <TrackerProbe />
        <Harness />
      </>,
    );

    fireEvent.click(screen.getByTestId('wa-api-link'));

    expect(trackWhatsAppClick).toHaveBeenCalledTimes(1);
  });

  it('3) click en <a href="google.com"> NO llama trackWhatsAppClick', () => {
    render(
      <>
        <TrackerProbe />
        <Harness />
      </>,
    );

    fireEvent.click(screen.getByTestId('google-link'));

    expect(trackWhatsAppClick).not.toHaveBeenCalled();
  });

  it('4) click en <span> hijo de <a href="wa.me"> llama trackWhatsAppClick (target.closest("a[href]"))', () => {
    render(
      <>
        <TrackerProbe />
        <Harness />
      </>,
    );

    fireEvent.click(screen.getByTestId('wa-span-child'));

    expect(trackWhatsAppClick).toHaveBeenCalledTimes(1);
  });

  it('5) cleanup: al desmontar el hook, clicks posteriores NO llaman trackWhatsAppClick', () => {
    const { unmount } = render(
      <>
        <TrackerProbe />
        <Harness />
      </>,
    );

    fireEvent.click(screen.getByTestId('wa-link'));
    expect(trackWhatsAppClick).toHaveBeenCalledTimes(1);

    unmount();

    // Después del cleanup el listener ya no está registrado.
    // Creamos un <a> fuera del árbol de React y disparamos click directo en document.
    const orphanLink = document.createElement('a');
    orphanLink.href = 'https://wa.me/orphan';
    document.body.appendChild(orphanLink);
    try {
      fireEvent.click(orphanLink);
    } finally {
      document.body.removeChild(orphanLink);
    }

    expect(trackWhatsAppClick).toHaveBeenCalledTimes(1);
  });

  it('6) múltiples clicks en WhatsApp acumulan llamadas (no se deduplica)', () => {
    render(
      <>
        <TrackerProbe />
        <Harness />
      </>,
    );

    fireEvent.click(screen.getByTestId('wa-link'));
    fireEvent.click(screen.getByTestId('wa-link'));
    fireEvent.click(screen.getByTestId('wa-link'));

    expect(trackWhatsAppClick).toHaveBeenCalledTimes(3);
  });
});
