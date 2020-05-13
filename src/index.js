import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

import CartProvider from './providers/cart/cart.provider'

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
