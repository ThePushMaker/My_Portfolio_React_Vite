import { useContext } from "react";
import { MyContext } from "../../MyContext";
import ProjectsCategoryCommon from "../../components/Projects/ProjectsCategoryCommon";

const ProjectsCategoryOverview = (props) => {
  const { projectsJSON, URL } = useContext(MyContext);
  const { categories } = projectsJSON;
  const Selectedcategory = categories[props.categoryIndex];
  const { category, description, projects } = Selectedcategory;

  return <ProjectsCategoryCommon title={category} description={description} projects={projects} URL={URL} />;
};

export default ProjectsCategoryOverview;