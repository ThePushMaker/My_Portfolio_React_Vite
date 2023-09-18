import { useContext } from "react";
import { MyContext } from "../../MyContext";
import ProjectsCategoryCommon from "../../components/Projects/ProjectsCategoryCommon";

import { useParams } from 'react-router-dom';
import { routes } from '../../routes';

const ProjectDetail= () => {
  const { idCategory } = useParams();
  const { idProject } = useParams();
  
  console.log(idCategory)
  console.log(idProject)
  
  const URL = routes[idCategory];
  console.log(URL);
  
  const { projectsJSON} = useContext(MyContext);
  const { categories } = projectsJSON;
 
  const category = categories.find((category) => category.category === idCategory);
  if (category) {
    // 
  } 
  else {
    console.error(new Error("No se encontró la categoria."))
  }
  
  const projectsInfo = category.projects[idProject-1]

  return <ProjectsCategoryCommon 
            projectCategory={category.category} 
            projectInfo={projectsInfo} 
            title={`Project: ${projectsInfo.title}`} 
            description={idProject} 
            URL={URL} 
        />;
};

export default ProjectDetail;