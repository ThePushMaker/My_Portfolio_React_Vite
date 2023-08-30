import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Event delegation
document.addEventListener('dragstart', function(evt) {
  if (evt.target.tagName == 'IMG', 'SVG') {
    evt.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
