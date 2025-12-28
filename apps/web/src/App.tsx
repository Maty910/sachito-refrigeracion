import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRouter } from './routes/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      {/* CAMBIO: Usamos las variables de marca para selección y fondo base */}
      <div className="font-sans antialiased bg-brand-dark text-text-main selection:bg-brand-accent selection:text-brand-dark flex flex-col min-h-screen">
        <Navbar />
        
        {/* El Router se encarga de cambiar el contenido del medio */}
        <main className="grow">
          <AppRouter />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;