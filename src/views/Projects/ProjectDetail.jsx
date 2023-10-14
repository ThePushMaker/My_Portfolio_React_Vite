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
  const { URL } = useContext(ArticleProjectsContext);
  
  let storedLanguage = localStorage.getItem('language');
  
  // get category name from url
  const { idProject } = useParams();
  const categoryName = getNameByURL(getParentURLByCurrentURL(URL),storedLanguage);
  
  let categories;
  
  if(storedLanguage === 'en') {
    categories=projectsJSON_en.categories
  }
  else if(storedLanguage === 'es') {
    categories=projectsJSON_es.categories
  } 

  let categoryData = null;
  let projectsInfo = null;
  
  const getProjectsDataByCategoryName = () => {
    categoryData = categories.find((category) => category.category === categoryName);
    if (!categoryData) {
      console.error(new Error("No se encontró la categoria."))
    }
    projectsInfo = categoryData.projects[idProject-1]
  }
  
  getProjectsDataByCategoryName(); 
 

  return(
    <>
       <ProjectsCategoryCommon 
            projectCategory={categoryData.category} 
            projectInfo={projectsInfo} 
            title={t(`projectDetail.title`)+`: ${projectsInfo.title}`} 
            description={idProject} 
            URL={URL} 
        />
    </>
  );
};

export default ProjectDetail;