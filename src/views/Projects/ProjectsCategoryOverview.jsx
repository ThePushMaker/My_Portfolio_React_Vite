
import { useLocation } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import ProjectsCategoryCommon from "../../components/Projects/ProjectsCategoryCommon";

import { useContext } from "react";
import { MyContext } from "../../MyContext";

const ProjectsCategoryOverview = (props) => {
  const location = useLocation();
  const { categories } = projectsJSON;
  const Selectedcategory = categories[props.categoryIndex];
  const { category, description, projects } = Selectedcategory;
  const URL = location.pathname;

  return <ProjectsCategoryCommon category={category} description={description} projects={projects} URL={URL} />;
};

export default ProjectsCategoryOverview;