import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import App from './App.js';
import Frame from './Frame.jsx';

const rootDiv = document.getElementById('root') as HTMLDivElement;

createRoot(rootDiv).render(
  <BrowserRouter>
    <Routes>
      <Route
        index
        path='/'
        element={
          <StrictMode>
            <App />
          </StrictMode>
        }
      />

      <Route path='/frame' element={<Frame />} />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </BrowserRouter>
);
