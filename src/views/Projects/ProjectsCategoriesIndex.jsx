import { useContext } from "react";
import { MyContext } from "../../MyContext";
import ProjectsCategoryCommon from '../../components/Projects/ProjectsCategoryCommon'

const title = 'Projects';
const ProjectsCategoriesIndex = () => {

  const { URL, projectsJSON} = useContext(MyContext);
  const { categories, description } = projectsJSON; 

  return <ProjectsCategoryCommon title={title} description={description} categories={categories} URL={URL} />;
};

export default ProjectsCategoriesIndex;