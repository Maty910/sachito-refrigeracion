import React from 'react';
import { MapPin, Phone, ArrowRight, Clock } from 'lucide-react';
import castelarMap from '../assets/images/castelar-map.png';

export const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-2 block font-display">
            Estamos Cerca
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6">
            Contáctanos
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            ¿Tenés una urgencia o querés coordinar un mantenimiento? 
            Escribinos y te respondemos en el día.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Columna Izquierda: Info de Contacto */}
          <div className="space-y-8">
            {/* Tarjeta de Info */}
            <div className="bg-surface-card border border-white/5 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-text-main mb-6 font-display">Vías de Comunicación</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-bold uppercase">Urgencias / WhatsApp</p>
                    <p className="text-xl text-white font-display">11 2337 6861</p>
                    <p className="text-xs text-brand-accent mt-1">Respuesta inmediata</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-bold uppercase">Zona de Cobertura</p>
                    <p className="text-lg text-white">Zona Oeste y CABA (Consultar zonas específicas)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-accent">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-bold uppercase">Horarios</p>
                    <p className="text-lg text-white">Lun a Sab: 08:00 - 22:00hs</p>
                    <p className="text-sm text-text-muted">Domingos: Guardias</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="aspect-video bg-surface-card rounded-3xl border border-white/5 overflow-hidden relative group">
              <a 
                href="https://www.google.com/maps/place/Castelar,+Buenos+Aires" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img 
                  src={castelarMap}
                  alt="Mapa de Castelar, Buenos Aires"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <p className="text-brand-accent font-bold flex items-center gap-2 bg-brand-dark px-4 py-2 rounded-full">
                    <MapPin /> Ver en Google Maps
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="bg-surface-dark border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-text-main mb-2 font-display">Mandanos un mensaje</h3>
            <p className="text-text-muted mb-8 text-sm">Te derivamos directo al WhatsApp técnico. Recordá adjuntar fotos con tu consulta.</p>

            <form 
              className="space-y-6" 
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const text = `Hola! Soy ${formData.get('name')}. Mi consulta es: ${formData.get('message')} y estoy ubicado en ${formData.get('location')}.`;
                window.open(`https://wa.me/+5491123376861?text=${encodeURIComponent(text)}`);
              }}
            >
              
              <div>
                <label className="block text-xs font-bold text-brand-accent uppercase mb-2 ml-1">Nombre Completo</label>
                <input 
                  name="name"
                  type="text" 
                  placeholder="Ej: Juan Pérez"
                  className="w-full bg-surface-card border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-accent uppercase mb-2 ml-1">Ubicación</label>
                <input 
                  name="location"
                  type="text" 
                  placeholder="Ej: Castelar Norte"
                  className="w-full bg-surface-card border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-accent uppercase mb-2 ml-1">Consulta</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Necesito instalar un aire..."
                  className="w-full bg-surface-card border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-gray-600 resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-accent text-brand-dark font-bold py-4 rounded-xl hover:bg-brand-highlight hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Enviar Mensaje de WhatsApp<ArrowRight size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};