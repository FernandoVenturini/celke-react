import React from 'react';
import { createRoot } from 'react-dom/client'; // Importação correta para React 18+
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap aqui

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();