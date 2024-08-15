import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './input.css';

import AppRoutes from './App';
import Menu from './components/Menu';
import Footer from './components/Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Menu />
    <AppRoutes />
    <Footer />
    </BrowserRouter>
  </StrictMode>
);