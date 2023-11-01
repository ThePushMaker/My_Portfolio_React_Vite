
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./Projects.css"
import projectsJSON_en from "../../data/en/projects.json";
import projectsJSON_es from "../../data/es/projects.json";
import Tabs from "./Tabs/Tabs.jsx";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// soon: category 'Research and Experimentation'

const Projects = () => {
  const [ t ] = useTranslation("global");
  
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]); 
  
  const storedLanguage = localStorage.getItem('language');
  
  useEffect(() => {
    if(storedLanguage === 'es') {
      setDescription(projectsJSON_es.description)
      setCategories(projectsJSON_es.categories)
    } else {
      setDescription(projectsJSON_en.description)
      setCategories(projectsJSON_en.categories)
    }
  },[storedLanguage])
  
  return (
    <>
      <section className="project bg_semitransparent px-4 md:px-14 lg:px-24 pt-12 pb-16 lg:pb-16" id="projects">
        <div className="container m-auto">
          <div className="w-full">
            <h2>
              <span className='emoji_size'>🗂️ </span>
                {t('projects.title')}
              <span className='emoji_size'> 🗂️</span>
            </h2>
            <p className="mt-[14px] mx-auto mb-[35px] text-center w-[90%] md:w-[100%]
              lg:mx-30"
            >
              {description}{'.'}  
            </p>
            <p className="mt-[55px] mx-auto mb-[30px] text-center w-[90%]
              lg:w-[70%] font-bold text-pink_color2">
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
