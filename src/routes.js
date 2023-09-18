

// function to find the name using the URL
const getNameByURL = (urlToFind) => {
  for (const name in routes) {
    if (routes[name] === urlToFind) {
      return name;
    }
  }
  // Si no se encuentra la URL, puedes devolver un valor por defecto o lanzar un error, según tus necesidades.
  return null; // Cambia esto si deseas un valor por defecto diferente.
};

const getParentURLByCurrentURL = (URL) => {
  const parts = URL.split('/'); // Divide la URL en partes usando "/" como separador
  return parts.slice(0, -1).join('/'); // Elimina la última parte y vuelve a unirla
}

// routes.js
const routes = {
  'Home': '/',
  'Projects': '/projects',
    'Web Platforms & Applications': '/projects/web-apps',
    'User Experience (UX)': '/projects/ux',
    'Community Contributions': '/projects/community',
  'About Me': '/about-me',
};

const NavbarRoutesHome = [
  {URL: '/#top', name: 'Home'},
  {URL: '/#skills', name: 'Skills'},
  {URL: '/#projects', name: 'Projects'},
]

const NavbarRoutes = [
  {URL: routes['Home'], name: 'Home'},
  {URL: routes['Projects'], name: 'Projects'},
]

export {routes, NavbarRoutesHome, NavbarRoutes, getNameByURL, getParentURLByCurrentURL};