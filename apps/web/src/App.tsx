import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRouter } from './routes/AppRouter';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { useWhatsAppClickTracker } from './hooks/useWhatsAppClickTracker';
import { usePageViewTracker } from './hooks/usePageViewTracker';

/**
 * Componente invisible que monta los dos hooks de tracking de Meta Pixel.
 *   - `useWhatsAppClickTracker`: dispara `Contact` ante cada click en un
 *     link de WhatsApp (capture-phase document listener).
 *   - `usePageViewTracker`: dispara `PageView` en mount y en cada cambio
 *     de `pathname` (ignora query y hash).
 *
 * Vive dentro del `<BrowserRouter>` para tener acceso a `useLocation()`
 * y se coloca como primer hijo (antes de `<ScrollToTop />`) para que el
 * tracking arranque lo antes posible sin alterar el resto del árbol.
 */
const Trackers = (): null => {
  useWhatsAppClickTracker();
  usePageViewTracker();
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Trackers />
      <ScrollToTop />
      
      <div className="font-sans antialiased bg-brand-dark text-text-main selection:bg-brand-accent selection:text-brand-dark flex flex-col min-h-screen">
        <Navbar />
        
        <main className="grow">
          <AppRouter />
        </main>

        <Footer />
        
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;