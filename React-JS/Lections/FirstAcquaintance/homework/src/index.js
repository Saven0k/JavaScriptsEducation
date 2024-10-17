import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Message from './components/Message'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Message text="Приветсвую дорогой пользователь"/>
  </React.StrictMode>
);

reportWebVitals();
