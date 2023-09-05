import { Link } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import ProjectItem from "../../components/Projects/ProjectItem/ProjectItem";


const UserExperienceUX = () => {
  const {categories} = projectsJSON;
  // console.log(categories[1])
  // console.log(categories[1].category)
  // console.log(categories[1].description)
  // console.log(categories[1].projects)
  
  return(
    <>
      <div>
        <h1 className="font-bold text-4xl md:text-4x1 text-highlighted_text_color">{categories[1].category}</h1>
        <div className="text-start text-lg py-2 italic">
          <Link to={'/'}><label className="text-link_color hover:text-link_color_hover hover:underline">Home</label></Link> 
          {/* {' / '} <Link to={'/'}><label className="text-link_color hover:text-link_color_hover hover:underline">Projects</label></Link>  */}
          {' / '} <span className="text-[#80d2ff]">{categories[1].category} Projects</span>
        </div>
        <p className=" mt-[14px] mx-auto mb-[35px] text-center w-[90%] md:w-[100%]
            lg:mx-30 text-xl"> 
          {categories[1].description}
        </p>
        <div
          className="grid grid-cols-1 gap-6
          md:grid-cols-2 lg:grid-cols-3"
        >
        
          {categories[1].projects.map((project, index) => {
            return (
                <ProjectItem 
                  key={index} 
                  {...project} 
                />
              )
          })}
        </div>
      </div>
      
    </>
  );
}

export default UserExperienceUX;