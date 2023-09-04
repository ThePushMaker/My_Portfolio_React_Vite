import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

// Event delegation
document.addEventListener('dragstart', function(evt) {
  if (evt.target.tagName == 'IMG', 'SVG') {
    evt.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
)
