import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useReducer } from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, useNavigate, useLocation } from 'react-router-dom';
import { usePageViewTracker } from './usePageViewTracker';
import * as metaPixel from '../lib/meta-pixel';

beforeEach(() => {
  vi.spyOn(metaPixel, 'trackPageView').mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function TrackerProbe(): null {
  usePageViewTracker();
  return null;
}

describe('usePageViewTracker', () => {
  it('1) al montar con pathname "/" llama trackPageView una vez (initial PageView)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <TrackerProbe />
      </MemoryRouter>,
    );

    expect(metaPixel.trackPageView).toHaveBeenCalledTimes(1);
  });

  it('2) al cambiar de ruta con useNavigate() llama trackPageView otra vez', () => {
    function NavHarness(): React.JSX.Element {
      const navigate = useNavigate();
      return (
        <>
          <TrackerProbe />
          <button onClick={() => navigate('/servicios')}>ir-a-servicios</button>
        </>
      );
    }

    render(
      <MemoryRouter initialEntries={['/']}>
        <NavHarness />
      </MemoryRouter>,
    );

    expect(metaPixel.trackPageView).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('ir-a-servicios'));

    expect(metaPixel.trackPageView).toHaveBeenCalledTimes(2);
  });

  it('3) NO llama trackPageView cuando solo cambia query/hash (pathname intacto)', () => {
    function QueryNavHarness(): React.JSX.Element {
      const navigate = useNavigate();
      const location = useLocation();
      return (
        <>
          <TrackerProbe />
          <div data-testid="search">{location.search || '(empty)'}</div>
          <button onClick={() => navigate('/?foo=bar')}>agregar-query</button>
          <button onClick={() => navigate('/#hash')}>agregar-hash</button>
        </>
      );
    }

    render(
      <MemoryRouter initialEntries={['/']}>
        <QueryNavHarness />
      </MemoryRouter>,
    );

    expect(metaPixel.trackPageView).toHaveBeenCalledTimes(1);

    // Cambio de query (pathname sigue en "/").
    fireEvent.click(screen.getByText('agregar-query'));
    expect(screen.getByTestId('search')).toHaveTextContent('foo=bar');
    expect(metaPixel.trackPageView).toHaveBeenCalledTimes(1);

    // Cambio de hash (pathname sigue en "/").
    fireEvent.click(screen.getByText('agregar-hash'));
    expect(metaPixel.trackPageView).toHaveBeenCalledTimes(1);
  });
});
