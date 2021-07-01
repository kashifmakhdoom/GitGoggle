import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
const dotenv = require("dotenv");
const result = dotenv.config({ debug: process.env.DEBUG })
if (result.error) {
  throw result.error
}
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
