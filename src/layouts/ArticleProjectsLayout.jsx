import { Outlet, useLocation } from "react-router-dom";
import { ArticleProjectsContext } from '../contexts/ArticleProjectsContext'

import projectsJSON from '../data/en/projects.json'

const ArticleProjectsLayout = () => {
  const location = useLocation();  
  const URL = location.pathname; // Obtén la URL actual

  return(
    <>
      <ArticleProjectsContext.Provider value={{ projectsJSON, URL }}>
        <Outlet />
      </ArticleProjectsContext.Provider>
    </>
  );
}

export default ArticleProjectsLayout;