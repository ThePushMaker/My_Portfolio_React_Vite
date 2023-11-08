

// function to find the name (id) inside the array using the URL
export const getNameByURL = (urlToFind, language) => {
  let routesData=null
  // find the correct language for the data;
  if(language==='en') routesData=routes
  else if(language==='es') routesData=routesES
  
  // find id looking for url
  for (const name in routesData) {
    if (routesData[name] === urlToFind) {
      return name;
    } 
  }
  return null; // default value
};

export const getParentURLByCurrentURL = (URL) => {
  const parts = URL.split('/'); // Divide la URL en partes usando "/" como separador
  return parts.slice(0, -1).join('/'); // Elimina la última parte y vuelve a unirla
}

// function that returns the last part of the URL: it splits url into different parts using '/' as separator and then extracts the last part of the URL array
export const getSlugByURL = (URL) => {
  const parts = URL.split('/'); 
  return 'slug', parts[parts.length - 1]
}

// p
export const urlRoutes = [
  {URL : '/', slug : '/', label : 'Home'},
  {URL : '/projects', slug : 'projects', label : 'Projects'},
]

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
  {URL: '/#skills', name: 'Skills'},
  {URL: '/#projects', name: 'Projects'},
  {URL: '/#aboutMe', name: 'About Me'},
]

export const NavbarRoutes = [
  {URL: routes['Home'], name: 'Home'},
  {URL: routes['Projects'], name: 'Projects'},
]
