
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./Projects.css"
import projectsJSON from "../../data/en/projects.json";
import Tabs from "./Tabs/Tabs.jsx";
import { useTranslation } from "react-i18next";


// proximamente category 'Research and Experimentation'

const Projects = () => {
  const [ t ] = useTranslation("global");
  
  const { categories, description } = projectsJSON;
  
  
  return (
    <>
      <section className="project bg-container_color px-4 md:px-14 lg:px-24 pt-12 pb-16 lg:pb-16" id="projects">
        <div className="container m-auto">
          <div className="w-full">
            <h2>{t('projects.title')}</h2>
            <p className="mt-[14px] mx-auto mb-[35px] text-center w-[90%] md:w-[100%]
              lg:mx-30"
            >
              {t(`projects.description`)}
              {description}
            </p>
            <p className="mt-[55px] mx-auto mb-[30px] text-center w-[90%]
              lg:w-[70%] font-bold">
              {t('projects.select_category')}:
            </p>
     
              <Tabs
                categories={categories}
              />
            
          </div>
        </div>
        <img
          className="background-image-right"
          src={colorSharp2}
          alt="background_right"
        />
      </section>
    </>
  );
};

export default Projects;
