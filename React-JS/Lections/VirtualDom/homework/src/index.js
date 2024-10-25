import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TemperatureConverter from './components/task1/TemperatureConverter';
import TodoList from './components/task2/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemperatureConverter />
    <TodoList />
  </React.StrictMode>
);


reportWebVitals();
