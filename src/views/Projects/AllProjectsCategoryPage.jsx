import { useLocation } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import ListAllProjectsCategory from "./ListAllProjectsCategory";

const AllProjectsCategoryPage = (props) => {
  const location = useLocation();
  
  const { categories } = projectsJSON;
  const category = categories[props.categoryIndex]; // Obtén la categoría específica
  const URL = location.pathname; // Obtén la URL actual
    
  return(
    <>
      <ListAllProjectsCategory 
        categoryData={category} 
        URL={URL} 
      />
    </>
  );
}

export default AllProjectsCategoryPage;