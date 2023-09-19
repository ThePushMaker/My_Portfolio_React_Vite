import { Outlet, useLocation } from "react-router-dom";
import { MyContext } from '../MyContext'

import projectsJSON from '../data/en/projects.json'

const ArticleProjectsLayout = () => {
  const location = useLocation();  
  const URL = location.pathname; // Obtén la URL actual

  return(
    <>
      <MyContext.Provider value={{ projectsJSON, URL }}>
        <Outlet />
      </MyContext.Provider>
    </>
  );
}

export default ArticleProjectsLayout;