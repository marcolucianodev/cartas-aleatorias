import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ButtonProvider } from './contexts/setButton';
import { AuthProvider } from './contexts/userAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ButtonProvider>
        <App />
      </ButtonProvider>
    </AuthProvider>
  </React.StrictMode>
);
