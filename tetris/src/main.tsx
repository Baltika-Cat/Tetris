import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { randomShape } from './shapes/randomShape';

randomShape();

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
