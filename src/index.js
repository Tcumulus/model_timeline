import React from 'react';
import ReactGA from "react-ga4";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactGA.initialize("G-KNVG93M203")
ReactGA.send("pageview")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
