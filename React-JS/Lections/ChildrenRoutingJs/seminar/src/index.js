import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Render from './components/Render';
import reportWebVitals from './reportWebVitals';
import ListPage from './components/ListPage';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Render /> */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
