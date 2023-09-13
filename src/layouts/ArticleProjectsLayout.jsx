import { Outlet, useLocation } from "react-router-dom";
import projectsJSON from '../data/projects.json'
import { MyContext } from '../MyContext'

const ArticleProjectsLayout = () => {
  const location = useLocation();

  const { description, categories } = projectsJSON;
  
  const URL = location.pathname; // Obtén la URL actual
  const title = 'Projects';
  
  

  return(
    <>
      
      <MyContext.Provider value={{ title, categories, description, URL }}>
      <Outlet />
      </MyContext.Provider>

    </>
  );
}

export default ArticleProjectsLayout;