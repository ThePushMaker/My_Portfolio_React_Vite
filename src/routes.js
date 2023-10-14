

// function to find the name using the URL
export const getNameByURL = (urlToFind, language) => {
  let routesData=null;
  if(language==='en') routesData=routes
  else if(language==='es') routesData=routesES
  
  for (const name in routesData) {
    if (routesData[name] === urlToFind) {
      return name;
    }
  }
  // Si no se encuentra la URL, puedes devolver un valor por defecto o lanzar un error, según tus necesidades.
  return null; // Cambia esto si deseas un valor por defecto diferente.
};

export const getParentURLByCurrentURL = (URL) => {
  const parts = URL.split('/'); // Divide la URL en partes usando "/" como separador
  return parts.slice(0, -1).join('/'); // Elimina la última parte y vuelve a unirla
}

// routes.js
export const routes = {
  'Home': '/',
  'Projects': '/projects',
    'Web Platforms & Applications': '/projects/web-apps',
    'Apps y Plataformas Web': '/projects/web-apps',
    'Interface Design': '/projects/designs',
    'Diseño de Interfaces': '/projects/designs',
    'Community Contributions': '/projects/community',
    'Contribuciones a Comunidad': '/projects/community',
};
export const routesES = {
  'Home': '/',
  'Projects': '/projects',
    'Apps y Plataformas Web': '/projects/web-apps',
    'Diseño de Interfaces': '/projects/designs',
    'Contribuciones a Comunidad': '/projects/community',
};

export const NavbarRoutesHome = [
  {URL: '/#top', name: 'Home'},
  {URL: '/#aboutMe', name: 'About Me'},
  {URL: '/#skills', name: 'Skills'},
  {URL: '/#projects', name: 'Projects'},
]

export const NavbarRoutes = [
  {URL: routes['Home'], name: 'Home'},
  {URL: routes['Projects'], name: 'Projects'},
]
