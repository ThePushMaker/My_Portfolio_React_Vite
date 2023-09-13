import { useContext } from "react";
import { MyContext } from "../../MyContext";
import ProjectsCategoryCommon from '../../components/Projects/ProjectsCategoryCommon'

const ProjectsCategoriesIndex = () => {
  const { title, categories, description0, URL } = useContext(MyContext);

  return <ProjectsCategoryCommon title={title} description={description} categories={categories} URL={URL} />;
};

export default ProjectsCategoriesIndex;