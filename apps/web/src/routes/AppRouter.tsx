import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { ServicesPage } from '../pages/ServicesPage';
import { CoveragePage } from '../pages/CoveragePage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/zona-de-cobertura" element={<CoveragePage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};