import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CalendarApp } from './CalendarApp.jsx';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendarApp />
    </BrowserRouter>
  </React.StrictMode>,
)
