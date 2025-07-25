/// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <HashRouter>
        <App />
      </HashRouter>
    </CartProvider>
  </React.StrictMode>
);

