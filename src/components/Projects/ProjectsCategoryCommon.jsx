import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/Breadcrumb";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import ProjectItemCard from "./ProjectItemCard/ProjectItemCard";
import routes from "../../routes";
import ProjectsListGrid from "./ProjectsListGrid/ProjectsListGrid";
import ProjectImage from "./ProjectImage/ProjectImage";

const ProjectsCategoryCommon = ({ URL, title, description, categories, projects, projectInfo, projectCategory }) => {
  
  const getRoute = (category) => {
    return routes[category] || '';
  }

  return (
    <>
      <div className="degradado5 rounded-t-[64px] w-full py-[35px]">
        <h1 className="text-center font-bold text-white text-[42px]">
          { title }
        </h1>
      </div>

      
      <div className="pt-5 pb-[70px] px-[28px] md:px-[40px] lg:px-24 bg-container_color3 shadow-2xl rounded-b-[64px] text-text_dark-gray">
        <BreadCrumb URL={URL} />
        { !projectInfo &&
          <p className="mx-auto text-text_dark-gray mb-10 text-center w-[90%] md:w-[100%] lg:mx-30">
            {description}
          </p>
        }

        <div className="justify-center text-center">
            
            {/* categories links list */}
            { categories &&
              <div className="flex justify-center">
                <div>
                  <span className="text-2xl text-text_dark-gray">Categories:</span>
                  <ul className="mt-2 list-disc text-text_dark-gray">
                    {categories.map((category, index)=> (
                      <li className="py-2" key={index}>
                        <Link
                          to={`${getRoute(category.category)}`}
                          className="text-dark_link_color hover:text-dark_link_color_hover2 hover:underline"
                        >
                          {category.category}
                        </Link>
                      </li>
                    ))} 
                  </ul>
                </div>
              </div>
            }
              
            {/* project items list */}
            {projects && (
              <>
                <span className="text-3xl text-text_dark-gray">Projects:</span>
                {/* <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project, index) => (
                    <ProjectItemCard key={index} {...project} />
                    ))}
                </div> */}
                <ProjectsListGrid 
                  projects={projects} 
                  category={title} 
                />
              </>
            )}
            
            {/* categories links list */}
            {projectInfo &&
              <div className="">
                <h2 className="text-4xl text-text_dark-gray">Project Information:</h2>
                  <div className="w-full md:w-3/4 mx-auto my-6">
                    <ProjectImage 
                      imgPath = { projectInfo.imgPath }
                      title = { projectInfo.title }
                    />
                  </div>
             
                <div>
                  <h3 className="text-3xl">
                    Description: 
                  </h3>
                  <p className="text-text_dark-gray">
                    {projectInfo.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-3xl">
                    Category: 
                  </h3>
                  <p className="text-text_dark-gray">
                    {projectCategory}
                  </p>
                </div>
                
                
              </div>
            }
      
        </div>

        
      </div>

      <AnimatedButton />
    </>
  );
};

export default ProjectsCategoryCommon;