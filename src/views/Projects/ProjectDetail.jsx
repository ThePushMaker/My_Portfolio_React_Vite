import { useContext, useEffect, useState } from "react";
import { ArticleProjectsContext } from "../../contexts/ArticleProjectsContext";
import ProjectsCategoryCommon from "../../components/Projects/ProjectsCategoryCommon";

import { useParams } from 'react-router-dom';
import { getNameByURL, getParentURLByCurrentURL } from '../../routes';
import { useTranslation } from "react-i18next";
import projectsJSON_en from "../../data/en/projects.json";
import projectsJSON_es from "../../data/es/projects.json";

const ProjectDetail= () => {
  const [ t] = useTranslation("global"); 
  const { URL, projectsJSON } = useContext(ArticleProjectsContext);
  // const { categories } = projectsJSON;
  
  // const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]); 
    
  const storedLanguage = localStorage.getItem('language');
  
  useEffect(() => {
    console.log("aaaaaaaaaaaa")
    console.log(storedLanguage)
    if(storedLanguage === 'en') {
      // setDescription(projectsJSON_en.description)
      setCategories(projectsJSON_en.categories)
    }
    else if(storedLanguage === 'es') {
      // setDescription(projectsJSON_es.description)
      setCategories(projectsJSON_es.categories)
      console.log('3',projectsJSON_es.categories)
    }
  },[storedLanguage])

  console.log('1',categories)

  //react router: get params from url to get project id 
  const { idProject } = useParams();
  // get category name from url
  const categoryName = getNameByURL(getParentURLByCurrentURL(URL),storedLanguage);
  console.log(categoryName)

  let categoryData = null;
  let projectsInfo = null;
  
  const getProjectsDataByCategoryName = () => {
    console.log(categories)
    categoryData = categories.find((category) => category.category === categoryName);
    if (!categoryData) {
      console.error(new Error("No se encontró la categoria."))
    }
    projectsInfo = categoryData.projects[idProject-1]
  }
  
  getProjectsDataByCategoryName();  

  return <ProjectsCategoryCommon 
            projectCategory={categoryData.category} 
            projectInfo={projectsInfo} 
            title={t(`projectDetail.title`)+`: ${projectsInfo.title}`} 
            description={idProject} 
            URL={URL} 
        />;
};

export default ProjectDetail;