import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

const content = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const renderRoot = () => ReactDOM.render(
  content,
  document.getElementById('root')
);

renderRoot();
