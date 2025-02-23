import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';

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

      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
