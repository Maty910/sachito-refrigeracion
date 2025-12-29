import { useState } from 'react';
import { Snowflake, ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
            <Snowflake size={24} />
          </div>
          <span className="text-xl font-bold text-text-main tracking-wide font-display">
            SACHITO<span className="text-brand-accent">.REF</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {/* Reemplazo de Expertis -> Nosotros (apunta a la sección de WhyUsGrid en Home) */}
          <a href="/#nosotros" className="text-sm text-text-muted hover:text-brand-accent transition-colors">Nosotros</a>
          
          <Link to="/servicios" className="text-sm text-text-muted hover:text-brand-accent transition-colors">Servicios</Link>
          <Link to="/cobertura" className="text-sm text-text-muted hover:text-brand-accent transition-colors">Cobertura</Link>
          
          {/* Garantía ahora es una sección importante */}
          <a href="/#garantia" className="text-sm text-text-muted hover:text-brand-accent transition-colors">Garantía</a>
          
          <button 
            onClick={() => window.open('https://wa.me/+5491123376861?text=Hola!%20Quisiera%20solicitar%20un%20turno')}
            className="bg-brand-accent text-brand-dark px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-highlight hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            Contacto <ArrowUpRight size={16} />
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
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="text-xl text-text-muted hover:text-brand-accent transition-colors">Servicios</Link>
          <Link to="/cobertura" onClick={() => setIsOpen(false)} className="text-xl text-text-muted hover:text-brand-accent transition-colors">Zona de Cobertura</Link>
          <a href="/#garantia" onClick={() => setIsOpen(false)} className="text-xl text-text-muted hover:text-brand-accent transition-colors">Garantía</a>
          <Link to="/contacto" onClick={() => setIsOpen(false)} className="text-xl text-brand-accent font-bold pt-2">Pedir Presupuesto</Link>
        </div>
      )}
    </nav>
  );
};