import projectsJSON from "../../data/projects.json";
import ListAllProjectsCategory from "./ListAllProjectsCategory";

const UserExperienceUX = () => {
  const { categories } = projectsJSON;
  const userExperienceCategory = categories[1]; // Obtén la categoría específica
  
  return(
    <>
      <ListAllProjectsCategory categoryData={userExperienceCategory} />
    </>
  );
}

export default UserExperienceUX;