import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface ImageCarouselSlide {
  src: string;
  alt: string;
  /** object-position override (e.g. 'object-[center_25%]'). Si no se setea, usa 'object-center'. */
  objectPosition?: string;
}

export interface ImageCarouselProps {
  slides: ImageCarouselSlide[];
  /** Default: 5000 */
  intervalMs?: number;
  /** Default: 'aspect-video' */
  aspectRatio?: string;
  /** Default: '' */
  className?: string;
  /** Renderiza progress dots clickeables debajo del carousel. Default: false */
  showDots?: boolean;
  /** 'cover' (default) o 'contain'. Default: 'cover' */
  objectFit?: 'cover' | 'contain';
}

const DEFAULT_INTERVAL_MS = 5000;

export const ImageCarousel = ({
  slides,
  intervalMs = DEFAULT_INTERVAL_MS,
  aspectRatio = 'aspect-video',
  className = '',
  showDots = false,
  objectFit = 'cover',
}: ImageCarouselProps) => {
  const [active, setActive] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(
    () => typeof document !== 'undefined' && document.visibilityState === 'hidden',
  );
  /** Incrementa en cada click de dot para forzar re-creación del setInterval desde clock=0. */
  const [restartKey, setRestartKey] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);

  const reducedMotion = useReducedMotion();

  const shouldRotate = !reducedMotion && !isHovered && !isHidden;

  const handleDotClick = (index: number): void => {
    setActive(index);
    setRestartKey((k) => k + 1);
  };

  // Auto-advance: setInterval directo (no useInterval) para que `restartKey`
  // sea una dep del effect y forzar reset sincrónico al click.
  useEffect(() => {
    if (!shouldRotate) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => {
      window.clearInterval(id);
    };
  }, [shouldRotate, intervalMs, slides.length, restartKey]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsHidden(document.visibilityState === 'hidden');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Barra de progreso: actualiza el DOM directamente (sin setState en effect)
  // para satisfacer react-hooks/set-state-in-effect.
  useEffect(() => {
    const fill = progressFillRef.current;
    if (reducedMotion) {
      if (fill) fill.style.width = '100%';
      return;
    }
    if (fill) fill.style.width = '0%';
    if (!shouldRotate) return;

    let rafId = 0;
    const start = performance.now();
    const tick = (now: number): void => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / intervalMs) * 100);
      if (progressFillRef.current) {
        progressFillRef.current.style.width = `${pct}%`;
      }
      if (pct < 100) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId !== 0) cancelAnimationFrame(rafId);
    };
  }, [active, shouldRotate, intervalMs, reducedMotion, restartKey]);

  const objectFitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover';
  const containerBg = objectFit === 'contain' ? 'bg-black' : '';

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden ${aspectRatio} ${containerBg} ${className}`.trim()}
      aria-live="off"
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          aria-hidden={i !== active}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={i === 0 ? 'high' : 'auto'}
          className={`absolute inset-0 h-full w-full ${objectFitClass} ${
            s.objectPosition ?? 'object-center'
          } transition-opacity duration-700 ${
            i === active
              ? 'opacity-100 motion-safe:group-hover:scale-[1.05] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out will-change-transform'
              : 'opacity-0'
          }`}
        />
      ))}
      {showDots && (
        <div
          role="tablist"
          aria-label="Selector de slide"
          className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2"
        >
          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-label={`Ir al slide ${i + 1}`}
                aria-current={isActive ? 'true' : 'false'}
                aria-selected={isActive ? 'true' : 'false'}
                onClick={() => handleDotClick(i)}
                className={`relative h-2.5 w-2.5 overflow-hidden rounded-full bg-white/40 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                }`}
              >
                {isActive && (
                  <div
                    ref={progressFillRef}
                    aria-hidden="true"
                    data-progress
                    className="absolute inset-y-0 left-0 bg-white"
                    style={{ width: '0%' }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 motion-safe:group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-out"
      />
    </div>
  );
};
