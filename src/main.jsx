import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './router.jsx'
// import i18n (needs to be bundled ;))
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Event delegation drag images
document.addEventListener('dragstart', function(evt) {
  if (evt.target.tagName == 'IMG', 'SVG') {
    evt.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={router}/>
      </I18nextProvider>
    </>
 )