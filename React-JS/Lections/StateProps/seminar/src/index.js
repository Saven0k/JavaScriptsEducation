import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TextInput from './components/textInput';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import CurrentTime from './components/CurrentTime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <TextInput/> */}
  {/* <TodoList /> */}
  <CurrentTime />
  <Timer />
  </React.StrictMode>
);

reportWebVitals();
