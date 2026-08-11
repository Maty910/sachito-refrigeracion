import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useInterval } from '../../hooks/useInterval';

export interface ImageCarouselSlide {
  src: string;
  alt: string;
}

export interface ImageCarouselProps {
  slides: ImageCarouselSlide[];
  intervalMs?: number;
  aspectRatio?: string;
  className?: string;
}

const DEFAULT_INTERVAL_MS = 5000;

export const ImageCarousel = ({
  slides,
  intervalMs = DEFAULT_INTERVAL_MS,
  aspectRatio = 'aspect-4/3',
  className = '',
}: ImageCarouselProps) => {
  const [active, setActive] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(
    () => typeof document !== 'undefined' && document.visibilityState === 'hidden',
  );

  const containerRef = useRef<HTMLDivElement | null>(null);

  const reducedMotion = useReducedMotion();

  const shouldRotate = !reducedMotion && !isHovered && !isHidden;

  useInterval(
    () => {
      setActive((prev) => (prev + 1) % slides.length);
    },
    shouldRotate ? intervalMs : null,
    shouldRotate,
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsHidden(document.visibilityState === 'hidden');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${aspectRatio} ${className}`.trim()}
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
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};