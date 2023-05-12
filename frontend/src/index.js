import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { CitiesContextProvider } from './context/CitiesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CitiesContextProvider>
        <App />
      </CitiesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);