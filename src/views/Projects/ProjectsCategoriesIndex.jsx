import { useContext } from "react";
import { ArticleProjectsContext } from "../../contexts/ArticleProjectsContext";
import ProjectsCategoryCommon from '../../components/Projects/ProjectsCategoryCommon'

const title = 'Projects';
const ProjectsCategoriesIndex = () => {

  const { URL, projectsJSON} = useContext(ArticleProjectsContext);
  const { categories, description } = projectsJSON; 

  return <ProjectsCategoryCommon title={title} description={description} categories={categories} URL={URL} />;
};

export default ProjectsCategoriesIndex;