import projectsJSON from "../../data/projects.json";
import ListAllProjectsCategory from "./ListAllProjectsCategory";

const CommunityContributions = () => {
  const { categories } = projectsJSON;
  const communityContributionsCategory = categories[2]; // Obtén la categoría específica
  
  return(
    <>
      <ListAllProjectsCategory categoryData={communityContributionsCategory} />
    </>
  );
}

export default CommunityContributions;