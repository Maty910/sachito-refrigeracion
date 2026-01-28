import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
// import { SCLogo } from '../ui/SCLogo';
import SCLogo from '../../assets/images/SC Refrigeracion logo.svg'; 


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // 1. Efecto Maestro: Controla el activo y el scroll
  useEffect(() => {
    // Determinamos cuál es la sección activa basándonos en la URL
    const currentPath = location.hash 
      ? location.pathname + location.hash 
      : location.pathname;
    
    setActiveSection(currentPath);

    // Lógica robusta de Scroll:
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Si el elemento ya está, vamos ahí suavemente
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Si no está (ej: venimos de otra página), esperamos un cachito a que renderice
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      // Si vamos al inicio sin hash, subimos al tope
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const NavLink = ({ to, label }: { to: string, label: string }) => {
    const isActive = activeSection === to;
    
    return (
      <Link 
        to={to} 
        className={`group relative text-sm font-medium transition-colors duration-300 py-1 ${
          isActive ? 'text-white' : 'text-text-muted hover:text-brand-accent'
        }`}
      >
        {label}
        <span 
          className={`absolute -bottom-1 left-0 w-full h-1 bg-brand-accent rounded-full transform transition-transform duration-300 ease-out origin-left ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        ></span>
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group mr-12">
          {/* <SCLogo /> */}
          <img src={SCLogo} alt="SC Refrigeracion Logo" className='w-65' />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          
          <div className="flex gap-8">
            <NavLink to="/#nosotros" label="Nosotros" />
            <NavLink to="/servicios" label="Servicios" />
            <NavLink to="/zonas-de-cobertura" label="Cobertura" />
            <NavLink to="/#garantia" label="Garantía" />
            <NavLink to="/contacto" label="Contacto" />
            <NavLink to="/#testimonios" label="Testimonios" />
          </div>
          
          <button 
            onClick={() => window.open('https://wa.me/+5491123376861?text=Hola!%20Quisiera%20solicitar%20un%20turno')}
            className="bg-brand-accent text-text-main px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-highlight hover:shadow-glow transition-all flex items-center gap-2 cursor-pointer truncate transform hover:-translate-y-0.5"
          >
            Agendar visita por WhatsApp <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-main hover:text-brand-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top-5">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl text-text-main font-medium border-b border-white/5 pb-2">Inicio</Link>
          
          <Link to="/servicios" onClick={() => setIsOpen(false)} className={`text-xl transition-colors ${activeSection === '/servicios' ? 'text-brand-accent font-bold' : 'text-text-muted'}`}>Servicios</Link>
          <Link to="/cobertura" onClick={() => setIsOpen(false)} className={`text-xl transition-colors ${activeSection === '/cobertura' ? 'text-brand-accent font-bold' : 'text-text-muted'}`}>Zona de Cobertura</Link>
          
          <Link to="/#garantia" onClick={() => setIsOpen(false)} className={`text-xl transition-colors ${activeSection.includes('#garantia') ? 'text-brand-accent font-bold' : 'text-text-muted'}`}>Garantía</Link>
          
          <Link to="/contacto" onClick={() => setIsOpen(false)} className="text-xl text-brand-accent font-bold pt-2">Pedir Presupuesto</Link>
        </div>
      )}
    </nav>
  );
};