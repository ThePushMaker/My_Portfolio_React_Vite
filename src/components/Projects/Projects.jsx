import { useEffect, useState } from "react";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import projImg1 from "../../assets/img/projects/project-img1.png";
import projImg2 from "../../assets/img/projects/project-img2.png";
import projImg3 from "../../assets/img/projects/project-img3.png";
import "./Projects.css";
import projectsJSON from "../../data/projects.json";

// proximamente 'Research and Experimentation'

const Projects = () => {
  // const [data, setData] = useState(projectsJSON);
  const {categories} = projectsJSON;
  console.log(categories)
  const [activeTab, setActiveTab] = useState(0); // Add state to track active tab
  
  useEffect(() => {
    handleTabClick(1)
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);

    // Remove transition classes from all panels and indicator
    const panels = document.querySelectorAll(".tab-panel");
    panels.forEach((panel) => {
      panel.classList.remove("visible", "opacity-100");
      panel.classList.add("invisible", "opacity-0");
    });

    // Apply transition classes to the clicked panel
    const clickedPanel = document.getElementById(`panel-${index}`);
    clickedPanel.classList.remove("invisible", "opacity-0");
    clickedPanel.classList.add("visible", "opacity-100");

    // Update indicator position
    const indicator = document.querySelector(".indicator");
    const tab = document.getElementById(`tab-${index}`);
    indicator.style.width = tab.getBoundingClientRect().width + "px";
    indicator.style.left =
      tab.getBoundingClientRect().left -
      tab.parentElement.getBoundingClientRect().left +
      "px";
  };





  return (
    <>
      <section className="px-6 md:px-14 lg:px-20 project py-[80px] px-0 bg-[black]" id="projects">
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

            <div>
              <div
                id="projects-tabs"
                role="tablist"
                aria-label="tabs"
                className="relative overflow-hidden shadow-2xl shadow-900/20 nav nav-pills h-[58px] lg:w-[72%]"
              >
                <div className="flex">
                  <div className="indicator h-[100%] rounded-full shadow-md"></div>
                  {categories.map((tab, index) =>{
                    return (
                      <button
                        key={index}
                        id={`tab-${index + 1}`}
                        className="tab nav-item nav-link"
                        onClick={() => handleTabClick(index + 1)} // Call the click handler
                      >
                        <span className="">{tab.category}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="relative rounded-3xl tabs_panel mt-[5px]
                lg:mt-[15px] 
              ">
                <div
                  role="tabpanel"
                  id="panel-1"
                  className="tab-panel p-6 transition duration-1000"
                >
                  <h3>First tab panel</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolores voluptate temporibus, atque ab eos, delectus at
                    ad hic voluptatem veritatis iure, nulla voluptates quod
                    nobis doloremque eaque! Perferendis, soluta.
                  </p>
                  {categories[0].projects.map((tab, index) =>{
                    return (
                      <div
                        key={index}
                        id={`tab-${index + 1}`}
                        className="tab nav-item nav-link"
                        onClick={() => handleTabClick(index + 1)} // Call the click handler
                      >
                        <span className="">{tab.title}</span>
                        <span className="">{tab.description}</span>
                        <span className="">{tab.imgPath}</span>
                        <br/>
                        <br/>
                      </div>
                    )
                  })}
                </div>
                <div
                  role="tabpanel"
                  id="panel-2"
                  className="tab-panel absolute top-0 invisible opacity-0  p-6 transition duration-1000"
                >
                  <h3>Second tab panel</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolores voluptate temporibus, atque ab eos, delectus at
                    ad hic voluptatem veritatis iure, nulla voluptates quod
                    nobis doloremque eaque! Perferendis, soluta.
                  </p>
                  {categories[1].projects.map((tab, index) =>{
                    return (
                      <div
                        key={index}
                        id={`tab-${index + 1}`}
                        className="tab nav-item nav-link"
                        onClick={() => handleTabClick(index + 1)} // Call the click handler
                      >
                        <span className="">{tab.title}</span>
                        <span className="">{tab.description}</span>
                        <span className="">{tab.imgPath}</span>
                        <br/>
                        <br/>
                      </div>
                    )
                  })}
                </div>
                <div
                  role="tabpanel"
                  id="panel-3"
                  className="tab-panel absolute top-0 invisible opacity-0 p-6 transition duration-1000"
                >
                  <h3>Third tab panel</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolores voluptate temporibus, atque ab eos, delectus at
                    ad hic voluptatem veritatis iure, nulla voluptates quod
                    nobis doloremque eaque! Perferendis, soluta.
                  </p>
                </div>
              </div>
            </div>
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
