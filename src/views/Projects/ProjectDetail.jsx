import { useContext } from "react";
import { MyContext } from "../../MyContext";
import ProjectsCategoryCommon from "../../components/Projects/ProjectsCategoryCommon";

import { useParams } from 'react-router-dom';
import { getNameByURL, getParentURLByCurrentURL } from '../../routes';

const ProjectDetail= () => {
  const { URL, projectsJSON } = useContext(MyContext);
  const { categories } = projectsJSON;

  const { idProject } = useParams();
  

  const categoryName = getNameByURL(getParentURLByCurrentURL(URL));

  const categoryData = categories.find((category) => category.category === categoryName);
  if (!categoryData) {
    console.error(new Error("No se encontró la categoria."))
  }
  
  const projectsInfo = categoryData.projects[idProject-1]

  return <ProjectsCategoryCommon 
            projectCategory={categoryData.category} 
            projectInfo={projectsInfo} 
            title={`Project: ${projectsInfo.title}`} 
            description={idProject} 
            URL={URL} 
        />;
};

export default ProjectDetail;