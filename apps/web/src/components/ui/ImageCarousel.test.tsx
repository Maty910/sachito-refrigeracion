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

  // ───────────────────────────────────────────────────────────────────
  // v2.0 — showDots + objectFit + per-slide objectPosition
  // ───────────────────────────────────────────────────────────────────

  it('8) showDots por default es false: no renderiza ningún botón de navegación', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} />);
    const dots = container.querySelectorAll('button[role="tab"]');
    expect(dots).toHaveLength(0);
  });

  it('9) showDots={true} renderiza N botones con aria-label descriptivo', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} showDots />);
    const dots = container.querySelectorAll('button[role="tab"]');
    expect(dots).toHaveLength(SLIDES.length);
    dots.forEach((dot, i) => {
      expect(dot.tagName).toBe('BUTTON');
      expect(dot).toHaveAttribute('type', 'button');
      expect(dot).toHaveAttribute('aria-label', `Ir al slide ${i + 1}`);
    });
    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).toBeInTheDocument();
    expect(tablist).toHaveAttribute('aria-label', 'Selector de slide');
  });

  it('10) dots: aria-current="true" solo en el active; "false" en el resto', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} showDots />);
    const dots = Array.from(container.querySelectorAll('button[role="tab"]'));
    expect(dots[0]).toHaveAttribute('aria-current', 'true');
    expect(dots[0]).toHaveAttribute('aria-selected', 'true');
    for (let i = 1; i < dots.length; i++) {
      expect(dots[i]).toHaveAttribute('aria-current', 'false');
      expect(dots[i]).toHaveAttribute('aria-selected', 'false');
    }
  });

  it('11) click en dot navega al slide target (cambia opacity-100 al img correspondiente)', () => {
    const { container } = render(<ImageCarousel slides={SLIDES} showDots />);
    const dots = Array.from(container.querySelectorAll('button[role="tab"]'));
    expect(getImgs(container)[0]).toHaveClass('opacity-100');
    act(() => { fireEvent.click(dots[2]); });
    const imgs = getImgs(container);
    expect(imgs[2]).toHaveClass('opacity-100');
    expect(imgs[0]).toHaveClass('opacity-0');
    expect(imgs[1]).toHaveClass('opacity-0');
    expect(imgs[3]).toHaveClass('opacity-0');
    expect(imgs[4]).toHaveClass('opacity-0');
    const dotsAfter = Array.from(container.querySelectorAll('button[role="tab"]'));
    expect(dotsAfter[2]).toHaveAttribute('aria-current', 'true');
    expect(dotsAfter[0]).toHaveAttribute('aria-current', 'false');
  });

  it('12) click en dot resetea el timer: el próximo auto-advance ocurre tras intervalMs completos', () => {
    const { container } = render(
      <ImageCarousel slides={SLIDES} showDots intervalMs={5000} />,
    );
    const dots = Array.from(container.querySelectorAll('button[role="tab"]'));
    expect(getImgs(container)[0]).toHaveClass('opacity-100');
    act(() => { fireEvent.click(dots[2]); });
    expect(getImgs(container)[2]).toHaveClass('opacity-100');
    act(() => { vi.advanceTimersByTime(4999); });
    expect(getImgs(container)[2]).toHaveClass('opacity-100');
    act(() => { vi.advanceTimersByTime(1); });
    expect(getImgs(container)[3]).toHaveClass('opacity-100');
  });

  it('13) objectFit: default "cover" aplica object-cover; "contain" aplica object-contain y bg-black al contenedor', () => {
    const { container: c1, unmount: u1 } = render(<ImageCarousel slides={SLIDES} />);
    const imgs1 = getImgs(c1);
    imgs1.forEach((img) => {
      expect(img).toHaveClass('object-cover');
      expect(img).not.toHaveClass('object-contain');
    });
    expect(c1.firstChild).not.toHaveClass('bg-black');
    u1();
    const { container: c2 } = render(
      <ImageCarousel slides={SLIDES} objectFit="contain" />,
    );
    const imgs2 = getImgs(c2);
    imgs2.forEach((img) => {
      expect(img).toHaveClass('object-contain');
      expect(img).not.toHaveClass('object-cover');
    });
    expect(c2.firstChild).toHaveClass('bg-black');
  });

  it('14) objectPosition: per-slide override aplica la clase exacta; default = object-center', () => {
    const slidesWithPos: ImageCarouselSlide[] = [
      { src: '/about/about-slide-01.webp', alt: 'Slide uno', objectPosition: 'object-[center_25%]' },
      { src: '/about/about-slide-02.webp', alt: 'Slide dos' },
    ];
    const { container } = render(<ImageCarousel slides={slidesWithPos} />);
    const imgs = getImgs(container);
    expect(imgs).toHaveLength(2);
    expect(imgs[0]).toHaveClass('object-[center_25%]');
    expect(imgs[1]).toHaveClass('object-center');
  });

  it('15) con prefers-reduced-motion + showDots, el fill de progreso arranca en 100% (sin rAF)', () => {
    window.matchMedia = vi.fn().mockImplementation((q: string) => ({
      matches: q === '(prefers-reduced-motion: reduce)',
      media: q, onchange: null,
      addListener: vi.fn(), removeListener: vi.fn(),
      addEventListener: vi.fn(), removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    const { container } = render(
      <ImageCarousel slides={SLIDES} showDots intervalMs={5000} />,
    );
    const activeDot = container.querySelector('button[aria-current="true"]');
    expect(activeDot).toBeInTheDocument();
    const fill = container.querySelector('[data-progress]');
    expect(fill).toBeInTheDocument();
    expect(fill).toHaveAttribute('aria-hidden', 'true');
    expect(fill).toHaveStyle({ width: '100%' });
    act(() => { vi.advanceTimersByTime(60_000); });
    const imgs = getImgs(container);
    expect(imgs[0]).toHaveClass('opacity-100');
    for (let i = 1; i < imgs.length; i++) {
      expect(imgs[i]).toHaveClass('opacity-0');
    }
  });
});