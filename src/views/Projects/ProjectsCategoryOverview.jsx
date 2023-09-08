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
      <div>
        <h1 className="font-bold text-4xl text-highlighted_text_color mb-3">
          {category}
        </h1>
        <BreadCrumb URL={URL} />
        <p className=" mx-auto mb-10 text-center w-[90%] md:w-[100%] lg:mx-30">
          {description}
        </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <ProjectItemCard key={index} {...project} />
            ))}
          {/* ProjectItemCard */}
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