import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRouter } from './routes/AppRouter';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { ScrollToTop } from './components/layout/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
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