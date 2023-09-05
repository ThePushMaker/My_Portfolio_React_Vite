import projectsJSON from "../../data/projects.json";
import ListAllProjectsCategory from "./ListAllProjectsCategory";

const WebPlatformsAndApplications = () => {
  const { categories } = projectsJSON;
  const webPlatformsAndApplications = categories[0]; // Obtén la categoría específica
  
  return(
    <>
      <ListAllProjectsCategory categoryData={webPlatformsAndApplications} />
    </>
  );
}

export default WebPlatformsAndApplications;