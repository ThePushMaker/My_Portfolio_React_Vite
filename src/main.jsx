import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './router.jsx'

// Event delegation
document.addEventListener('dragstart', function(evt) {
  if (evt.target.tagName == 'IMG', 'SVG') {
    evt.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <RouterProvider router={router}/>
    </>
 )