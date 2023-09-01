
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./Projects.css"
import projectsJSON from "../../data/projects.json";
import Tabs from "./Tabs/Tabs.jsx";


// proximamente 'Research and Experimentation'

const Projects = () => {
  // const [data, setData] = useState(projectsJSON);
  const {categories} = projectsJSON;
  // console.log(categories)

 

  return (
    <>
      <section className="project px-4 md:px-14 lg:px-20 py-[80px]" id="projects">
        <div className="container m-auto">
          <div className="w-full">
            <h2>Projects</h2>
            <p className="
            mt-[14px] mx-auto mb-[35px] text-center w-[90%]
            lg:w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloremque adipisci unde voluptatum numquam aspernatur architecto
              dolores commodi cum, ullam vitae! Possimus voluptatibus quasi
              dolorem quia molestias nostrum harum illum!
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
