import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Providers  from './Context/Providers.jsx';

createRoot(document.getElementById('root')).render(
  <Providers>
    <StrictMode>
      <App />
    </StrictMode>
  </Providers>
);
