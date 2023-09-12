import { Link } from "react-router-dom";

import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import projectsJSON from '../../data/projects.json'
const ProjectsCategoriesIndex = () => {
const { categories } = projectsJSON;

  return(
    <>
      <div className="flex justify-center">
      <div className="">
        <span className="text-2xl">
          Categories:
        </span>
        <ul className="list-disc mt-2">
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