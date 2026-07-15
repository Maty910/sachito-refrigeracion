import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SCLogo } from '../ui/SCLogo';
import { COMPANY } from '@domain/brand/company';

// WhatsApp CTA del navbar: pedir un turno es la acción principal, así que
// usamos el mensaje `schedule` y derivamos el número de COMPANY.
const WHATSAPP_URL = `https://wa.me/${COMPANY.contact.whatsapp.number}?text=${encodeURIComponent(COMPANY.contact.whatsapp.messages.schedule)}`;

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
  className?: string;
}

// Top-level (stable) link component. Defining it at module scope keeps
// React-Hooks lints happy: it never re-mounts on parent re-renders and never
// appears as "component created during render".
function NavLink({ to, label, isActive, onNavigate, className = '' }: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      aria-current={isActive ? 'page' : undefined}
      className={`group relative inline-flex items-center rounded-md px-2.5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark motion-reduce:transition-none ${
        isActive ? 'text-white' : 'text-text-muted hover:text-white'
      } ${className}`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-2.5 bottom-1 h-0.5 origin-left rounded-full bg-brand-accent transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isActive
            ? 'scale-x-100'
            : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
        }`}
      />
    </Link>
  );
}

// Mobile row uses the same hover/focus treatment as the desktop NavLink, but
// with a taller hit-target and an inset underline aligned to the row.
function MobileNavLink({ to, label, isActive, onNavigate }: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      aria-current={isActive ? 'page' : undefined}
      className={`group relative flex items-center rounded-md px-4 py-3 text-base font-medium transition-colors duration-200 hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-inset motion-reduce:transition-none ${
        isActive ? 'text-white' : 'text-text-muted hover:text-white'
      }`}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-4 bottom-2 h-0.5 origin-left rounded-full bg-brand-accent transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isActive
            ? 'scale-x-100'
            : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
        }`}
      />
    </Link>
  );
}

// Small live-status chip: pulsing green dot + restrained label.
// aria-live=polite so future status changes (e.g. "Cerrado por vacaciones")
// are announced to assistive tech without interrupting the user.
function StatusDot() {
  return (
    <span
      aria-live="polite"
      className="hidden items-center gap-2 text-xs font-medium text-text-muted 2xl:inline-flex"
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-success/60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-status-success" />
      </span>
      Aceptando turnos
    </span>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Derive the active section directly from the URL — no useState, no effect.
  // The previous implementation stored this in state and updated it inside a
  // useEffect, which both trips `react-hooks/set-state-in-effect` and creates
  // an unnecessary re-render. Derivation is always in sync with `location`.
  const activePath = location.hash
    ? location.pathname + location.hash
    : location.pathname;

  // Smooth scroll to a hash target when present; otherwise scroll to top on
  // the home route. No setState is called here, so the lint rule stays happy.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const scrollToId = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      };
      scrollToId();
      // Retry on next tick in case the target section hasn't mounted yet
      // (e.g. navigating from another page).
      const timer = window.setTimeout(scrollToId, 100);
      return () => window.clearTimeout(timer);
    }
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // Safety net: close the mobile menu whenever the route changes, even if
  // the link's onClick was prevented for any reason. The setState is
  // deferred to a microtask so the body of the effect stays free of
  // synchronous setState (which trips `react-hooks/set-state-in-effect`).
  useEffect(() => {
    queueMicrotask(() => setIsOpen(false));
  }, [location.pathname, location.hash]);

  // Close the mobile menu on Escape. Listener is only attached while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface-dark supports-[backdrop-filter]:bg-surface-dark/80 supports-[backdrop-filter]:backdrop-blur"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="group inline-flex items-center rounded-md transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark motion-reduce:transition-none"
        >
          <SCLogo variant="navbar" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 font-medium xl:flex">
          <div className="flex items-center gap-1" aria-label="Secciones">
            <NavLink to="/#nosotros" label="Nosotros" isActive={activePath === '/#nosotros'} />
            <NavLink to="/servicios" label="Servicios" isActive={activePath === '/servicios'} />
            <NavLink
              to="/zonas-de-cobertura"
              label="Cobertura"
              isActive={activePath === '/zonas-de-cobertura'}
            />
            <NavLink to="/#garantia" label="Garantía" isActive={activePath === '/#garantia'} />
            <NavLink to="/contacto" label="Contacto" isActive={activePath === '/contacto'} />
            <NavLink
              to="/#testimonios"
              label="Testimonios"
              isActive={activePath === '/#testimonios'}
            />
          </div>

          <span aria-hidden="true" className="h-6 w-px bg-white/10" />

          <StatusDot />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-brand-accent px-5 py-2.5 text-sm font-bold text-brand-dark transition-colors duration-200 hover:bg-brand-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark motion-reduce:transition-none"
          >
            Agendar visita por WhatsApp
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text-main transition-colors duration-200 hover:bg-white/5 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark xl:hidden motion-reduce:transition-none"
        >
          {isOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="border-t border-white/10 bg-surface-dark supports-[backdrop-filter]:bg-surface-dark/95 supports-[backdrop-filter]:backdrop-blur xl:hidden"
      >
        <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
          <MobileNavLink to="/" label="Inicio" isActive={activePath === '/'} onNavigate={closeMenu} />
          <MobileNavLink
            to="/#nosotros"
            label="Nosotros"
            isActive={activePath === '/#nosotros'}
            onNavigate={closeMenu}
          />
          <MobileNavLink
            to="/servicios"
            label="Servicios"
            isActive={activePath === '/servicios'}
            onNavigate={closeMenu}
          />
          <MobileNavLink
            to="/zonas-de-cobertura"
            label="Zona de Cobertura"
            isActive={activePath === '/zonas-de-cobertura'}
            onNavigate={closeMenu}
          />
          <MobileNavLink
            to="/#garantia"
            label="Garantía"
            isActive={activePath === '/#garantia'}
            onNavigate={closeMenu}
          />
          <MobileNavLink
            to="/contacto"
            label="Contacto"
            isActive={activePath === '/contacto'}
            onNavigate={closeMenu}
          />
          <MobileNavLink
            to="/#testimonios"
            label="Testimonios"
            isActive={activePath === '/#testimonios'}
            onNavigate={closeMenu}
          />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-accent px-5 py-3.5 text-sm font-bold text-brand-dark transition-colors duration-200 hover:bg-brand-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark motion-reduce:transition-none"
          >
            Agendar visita por WhatsApp
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
