import { useContext } from "react";
import { MyContext } from "../../MyContext";
import ProjectsCategoryCommon from "../../components/Projects/ProjectsCategoryCommon";

import { useParams } from 'react-router-dom';
import routes from "../../routes";

const ProjectDetail= (props) => {
  const { idCategory } = useParams();
  const { idProject } = useParams();
  
  console.log(idCategory)
  console.log(idProject)
  
  // getData from routes, url by name
  const URL = routes[idCategory] || ''; 
  console.log(URL)
  
  const { projectsJSON} = useContext(MyContext);
  const { categories } = projectsJSON;
  const Selectedcategory = categories[0];
  const { category, description, projects } = Selectedcategory;

  return <ProjectsCategoryCommon title={category} description={description} projects={projects} URL={URL} />;
};

export default ProjectDetail;