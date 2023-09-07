import { Link, useLocation } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import BreadCrumb from "../../components/BreadCrumb/Breadcrumb";

const AllCategoriesLinks = (props) => {
  const location = useLocation();
  
  const URL = location.pathname; // Obtén la URL actual
  const { categories } = projectsJSON;
  const title = 'Projects';
  const mainParagraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis facilis sunt, officiis optio itaque vero quisquam. Necessitatibus ipsam, odit perspiciatis harum, laudantium eligendi minus veniam sunt atque soluta omnis.';


  return(
    <>
      <h1 className="font-bold text-4xl md:text-4x1 text-highlighted_text_color mb-3">
        { title }
      </h1>
      <BreadCrumb URL={URL} />
      <p className=" mt-[14px] mx-auto mb-[35px] text-center w-[90%] md:w-[100%] lg:mx-30">
        { mainParagraph }
      </p>
      
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

export default AllCategoriesLinks;