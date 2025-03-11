import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import App from './App.jsx';
import Frame from './Frame.jsx';

createRoot(document.getElementById('root')).render(
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
