import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Tu CSS con Tailwind
import App from './App'

import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';

import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)