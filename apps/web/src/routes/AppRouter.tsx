import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { ServicesPage } from '../pages/ServicesPage';
import { CoveragePage } from '../pages/CoveragePage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/zonas-de-cobertura" element={<CoveragePage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};