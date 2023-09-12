import { useLocation } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import BreadCrumb from "../../components/BreadCrumb/Breadcrumb";
import ProjectItemCard from "../../components/Projects/ProjectItemCard/ProjectItemCard";

const ProjectsCategoryOverview = (props) => {
  const location = useLocation();
  
  const { categories } = projectsJSON;
  const Selectedcategory = categories[props.categoryIndex]; // Obtén la categoría específica
  const { category, description, projects } = Selectedcategory;
  const URL = location.pathname; // Obtén la URL actual

  return(
    <>
      <div className="">
        <div className="degradado5 rounded-t-[64px] w-full py-[35px]">
          <h1 className="text-center font-bold text-white text-4xl">
            {category}
          </h1>
        </div>
        <div className='pt-5 pb-[70px] px-[28px] md:px-[40px] lg:px-24 bg-container_color3 shadow-2xl rounded-b-[64px]'>
          <BreadCrumb URL={URL} />
          <p className=" mx-auto text-[black] mb-10 text-center w-[90%] md:w-[100%] lg:mx-30">
            {description}
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project, index) => (
              <ProjectItemCard key={index} {...project} />
              ))}
            {/* ProjectItemCard */}
          </div>
        </div>
      </div>
{/*     
      <ListAllProjectsCategory 
        categoryData={category} 
        URL={URL} 
      /> */}
    </>
  );
}

export default ProjectsCategoryOverview;