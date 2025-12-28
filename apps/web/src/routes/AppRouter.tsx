import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { ServicesPage } from '../pages/ServicesPage';
// Más adelante importás otras páginas acá, ej: import { ContactPage } from '../pages/ContactPage';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<HomePage />} />
      
      {/* Ejemplo de futura ruta */}
      {/* <Route path="/servicios/:id" element={<ServiceDetailPage />} /> */}

      {/* Comodín: Si escriben cualquier fruta, los mandamos al Home */}
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};