import React from 'react';
import ReactDOM from 'react-dom';

import { CounterContextProvider } from './contexts/CounterContext';
import { Home } from './pages/Home';

import './styles/global-styles.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
