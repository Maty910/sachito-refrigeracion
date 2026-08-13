import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, act, cleanup } from '@testing-library/react';
import { ImageCarousel } from './ImageCarousel';
import type { ImageCarouselSlide } from './ImageCarousel';

const SLIDES: ImageCarouselSlide[] = [
  { src: '/about/about-slide-01.webp', alt: 'Slide uno' },
  { src: '/about/about-slide-02.webp', alt: 'Slide dos' },
  { src: '/about/about-slide-03.webp', alt: 'Slide tres' },
  { src: '/about/about-slide-04.webp', alt: 'Slide cuatro' },
  { src: '/about/about-slide-05.webp', alt: 'Slide cinco' },
];

const getImgs = (container: HTMLElement): HTMLImageElement[] =>
  Array.from(container.querySelectorAll('img'));

beforeEach(() => {
  vi.useFakeTimers();
  window.matchMedia = vi.fn().mockImplementation((q: string) => ({
    matches: false, media: q, onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(),
    addEventListener: vi.fn(), removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
  Object.defineProperty(document, 'visibilityState', {
    configurable: true, get: () => 'visible' as DocumentVisibilityState,
  });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('<ImageCarousel />', () => {
  it('1) renderiza 5 <img>; la primera con opacity-100 y el resto con opacity-0', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} />);
    const imgs = getImgs(container);
    expect(imgs).toHaveLength(5);
    expect(imgs[0]).toHaveClass('opacity-100');
    for (let i = 1; i < imgs.length; i++) {
      expect(imgs[i]).toHaveClass('opacity-0');
    }
  });

  it('2) avanza automáticamente al siguiente slide después de intervalMs', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} intervalMs={5000} />);
    expect(getImgs(container)[0]).toHaveClass('opacity-100');

    act(() => { vi.advanceTimersByTime(5000); });

    const imgs = getImgs(container);
    expect(imgs[0]).toHaveClass('opacity-0');
    expect(imgs[1]).toHaveClass('opacity-100');
  });

  it('3) pausa el auto-play en mouseenter y lo reanuda en mouseleave', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} intervalMs={5000} />);
    const root = container.firstChild as HTMLElement;

    act(() => { fireEvent.mouseEnter(root); });
    act(() => { vi.advanceTimersByTime(10_000); });

    expect(getImgs(container)[0]).toHaveClass('opacity-100');

    act(() => { fireEvent.mouseLeave(root); });
    act(() => { vi.advanceTimersByTime(5_000); });

    const imgs = getImgs(container);
    expect(imgs[0]).toHaveClass('opacity-0');
    expect(imgs[1]).toHaveClass('opacity-100');
  });

  it('4) pausa el auto-play cuando el documento pasa a hidden y retoma al volver a visible', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} intervalMs={5000} />);

    Object.defineProperty(document, 'visibilityState', {
      configurable: true, get: () => 'hidden' as DocumentVisibilityState,
    });
    act(() => { document.dispatchEvent(new Event('visibilitychange')); });

    act(() => { vi.advanceTimersByTime(10_000); });
    expect(getImgs(container)[0]).toHaveClass('opacity-100');

    Object.defineProperty(document, 'visibilityState', {
      configurable: true, get: () => 'visible' as DocumentVisibilityState,
    });
    act(() => { document.dispatchEvent(new Event('visibilitychange')); });

    act(() => { vi.advanceTimersByTime(5_000); });
    const imgs = getImgs(container);
    expect(imgs[0]).toHaveClass('opacity-0');
    expect(imgs[1]).toHaveClass('opacity-100');
  });

  it('5) con prefers-reduced-motion: reduce activo, no avanza ningún slide', () => {
    window.matchMedia = vi.fn().mockImplementation((q: string) => ({
      matches: q === '(prefers-reduced-motion: reduce)',
      media: q, onchange: null,
      addListener: vi.fn(), removeListener: vi.fn(),
      addEventListener: vi.fn(), removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { container } = render(<ImageCarousel slides={SLIDES} intervalMs={5000} />);

    act(() => { vi.advanceTimersByTime(60_000); });

    const imgs = getImgs(container);
    expect(imgs[0]).toHaveClass('opacity-100');
    for (let i = 1; i < imgs.length; i++) {
      expect(imgs[i]).toHaveClass('opacity-0');
    }
  });

  it('6) limpia el timer al desmontar (no quedan intervalos colgados)', () => {
    const { unmount } = render(<ImageCarousel slides={SLIDES} intervalMs={5000} />);
    unmount();

    expect(vi.getTimerCount()).toBe(0);
    expect(() => { vi.advanceTimersByTime(60_000); }).not.toThrow();
  });

  it('7) cada <img> tiene el alt exacto provisto (no vacío, no genérico)', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} />);
    const imgs = getImgs(container);
    expect(imgs).toHaveLength(5);

    imgs.forEach((img, i) => {
      const alt = img.getAttribute('alt') ?? '';
      expect(alt).toBe(SLIDES[i].alt);
      expect(alt.length).toBeGreaterThan(0);
      expect(alt.toLowerCase()).not.toBe('image');
      expect(alt.toLowerCase()).not.toBe('photo');
    });
  });
});