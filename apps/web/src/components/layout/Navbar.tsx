import { useState } from 'react';
import { Snowflake, ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
            <Snowflake size={24} />
          </div>
          <span className="text-xl font-bold text-text-main tracking-wide font-display">
            {/* CAMBIO: text-blue-400 -> text-brand-accent */}
            SACHITO<span className="text-brand-accent">.REF</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {/* CAMBIO: text-gray-300 -> text-text-muted */}
          <a href="/#expertis" className="text-sm text-text-muted hover:text-brand-accent transition-colors">Expertis</a>
          <Link to="/servicios" className="text-sm text-text-muted hover:text-brand-accent transition-colors">Servicios</Link>
          <a href="/#garantia" className="text-sm text-text-muted hover:text-brand-accent transition-colors">Garantía</a>
          <Link to="/contacto" className="text-sm text-text-muted hover:text-brand-accent transition-colors">Contacto</Link>
          
          <button 
            onClick={() => window.open('https://wa.me/+5491123376861?text=Hola!%20Quisiera%20solicitar%20un%20turno%20para%20servicio%20de%20refrigeración')}
            className="bg-brand-accent text-brand-dark px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-highlight hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2 cursor-pointer"
          >
            Pedir Turno <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-main" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl text-text-main font-medium">Inicio</Link>
          <a href="/#expertis" onClick={() => setIsOpen(false)} className="text-xl text-text-muted hover:text-brand-accent transition-colors">Servicios</a>
          <Link to="/contacto" onClick={() => setIsOpen(false)} className="text-xl text-brand-accent font-bold">Contacto</Link>
        </div>
      )}
    </nav>
  );
};