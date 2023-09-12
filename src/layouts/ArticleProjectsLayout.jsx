import { Outlet, useLocation } from "react-router-dom";
import ArticleHeaderLayout from "../views/Generals/ArticleHeaderLayout";
import projectsJSON from '../data/projects.json'
const ArticleProjectsLayout = () => {
  const location = useLocation();

  const { description } = projectsJSON;
  
  const URL = location.pathname; // Obtén la URL actual
  const title = 'Projects';

  return(
    <>
      <ArticleHeaderLayout 
        title = {title}
        mainParagraph = {description}
        URL = {URL}
      />
      aaaaaaaaaaaaaaa
      <Outlet />
aaaaaaaaaa
    </>
  );
}

export default ArticleProjectsLayout;