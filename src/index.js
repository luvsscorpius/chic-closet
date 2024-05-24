import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShopContextProvider } from './Context/ShopContext';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </ShopContextProvider>
);

