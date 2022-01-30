import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
      <UserContext>
          <App />
      </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
