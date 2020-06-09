import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserContext from './userContext';

ReactDOM.render(
  <UserContext.Provider value={"Andy9929"}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);
