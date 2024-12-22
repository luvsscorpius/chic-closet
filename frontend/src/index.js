import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShopContextProvider } from './Context/ShopContext';
import { HashRouter as Router } from 'react-router-dom'; // Importando o Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ShopContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ShopContextProvider>
  </Router>
);

