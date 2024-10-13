import './index.css';

import { randomShape } from './shapes/randomShape';

randomShape();

import { App } from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
