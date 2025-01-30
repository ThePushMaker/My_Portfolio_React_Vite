import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ProjectTabs from "@/components/Projects/ProjectTabs/ProjectTabs";
import CustomHeader from "@/components/UI/CustomHeader/CustomHeader";
import projectsJSON_en from "@/data/en/projects.json";
import projectsJSON_es from "@/data/es/projects.json";
import "@/components/Projects/Projects.css"

// soon: category 'Research and Experimentation'

const ProjectsSection = () => {
  const [ t ] = useTranslation("global");
  
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]); 
  
  const storedLanguage = localStorage.getItem('language');
  
  // establece el contenido de la descripcion y las categorias segun el idioma
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
      <section 
        className="project bg_semitransparent px-4 md:px-14  pt-12 pb-16 lg:pb-16"
        id="projects"
      >
        <div className="container m-auto w-full lg:max-w-screen-xl">
        
          {/* titulo */}
          <CustomHeader
              align='center'
              emoji='🗂️'
              text={t(`projects.title`)}
          />
          
          {/* descripcion */}
          <p className="mt-[14px] mx-auto mb-[35px] text-center w-[90%] md:w-5/6 lg:mx-30"
          >
            {description}{'.'}
          </p>
          
          {/* texto selecciona una categoria */}
          <p className="mt-[55px] mx-auto mb-[30px] text-center w-[90%] font-bold text-pink_color2 lg:w-[70%]">
            {t('projects.select_category')}:
          </p>
    
          {/* componente de tabs con categorias de proyectos */}
          <ProjectTabs
            categories={categories}
          />
          
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
