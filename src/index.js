import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FireAuthProvider } from './context/fireAuthContext';
import { FireDBstorageProvider } from './context/fireDBstorage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FireAuthProvider>
      <FireDBstorageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FireDBstorageProvider>
    </FireAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
