import { Link, useLocation } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import ArticleHeaderLayout from "../Generals/ArticleHeaderLayout";

const ProjectsCategoriesIndex = () => {
  const location = useLocation();
  // const { description } = projectsJSON;
  const { categories, description } = projectsJSON;
  
  const URL = location.pathname; // Obtén la URL actual
  const title = 'Projects';

  return(
    <>
      <ArticleHeaderLayout 
        title = {title}
        mainParagraph = {description}
        URL = {URL}
      />
      
      <div className="flex justify-center">
      <div className="text-start">
        <span>
          Categories:
        </span>
        <ul className="list-disc mt-2 ml-10">
          <li className="py-2 ">
          <Link to={'/projects/web-apps'} 
            className='text-link_color hover:text-link_color_hover hover:underline'> 
            {categories[0].category}
          </Link>
          </li>
          <li className="py-2">
          <Link to={'/projects/ux'} 
            className='text-link_color hover:text-link_color_hover hover:underline'> 
            {categories[1].category}
          </Link>
          </li>
          <li className="py-2">
          <Link to={'/projects/community'} 
            className='text-link_color hover:text-link_color_hover hover:underline'> 
            {categories[2].category}
          </Link>
          </li>
        </ul>
      </div>
      </div>
      
      <AnimatedButton/>
    </>
  );
}

export default ProjectsCategoriesIndex;