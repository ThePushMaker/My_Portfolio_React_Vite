import { useEffect } from 'react';
import './Projects.css';

import colorSharp2 from '../../assets/img/color-sharp2.png'
import projImg1 from '../../assets/img/projects/project-img1.png'
import projImg2 from '../../assets/img/projects/project-img2.png'
import projImg3 from '../../assets/img/projects/project-img3.png'


const Projects = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    const indicator = document.querySelector(".indicator");
    const panels = document.querySelectorAll(".tab-panel");

    indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
    indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const tabTarget = tab.getAttribute("aria-controls");

        indicator.style.width = tab.getBoundingClientRect().width + 'px';
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';

        panels.forEach(panel => {
          const panelId = panel.getAttribute("id");
          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-0");
            panel.classList.add("visible", "opacity-100");
          } else {
            panel.classList.add("invisible", "opacity-0");
          }
        });
      });
    });
  }, []);
  
  const projects = [
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgPath: 'projIMG1'
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgPath: 'projIMG2'
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgPath: 'projIMG3'
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgPath: 'projIMG1'
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgPath: 'projIMG2'
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgPath: 'projIMG3'
    },
  ]
  
  
  return(
    <>
      <section className='px-6 md:px-14 lg:px-20 project' id="projects">
        <div className='container m-auto'>
          <div className='w-full'>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque adipisci unde voluptatum numquam aspernatur architecto dolores commodi cum, ullam vitae! Possimus voluptatibus quasi dolorem quia molestias nostrum harum illum!
            </p>
            
            <div>
              <div 
              id="projects-tabs" 
              role="tablist"
              aria-label="tabs"
              className="relative overflow-hidden shadow-2xl shadow-900/20 nav nav-pills h-[58px]" 
              >
                <div className='flex'>
                  <div className="indicator h-[100%] rounded-full shadow-md"></div>
                    <button
                      role="tab"
                      aria-selected="true"
                      aria-controls="panel-1"
                      id="tab-1"
                      tabIndex="0"
                      className="tab nav-item nav-link"
                    >
                      <span className="">First Tab</span>
                    </button>
                    <button
                      role="tab"
                      aria-selected="false"
                      aria-controls="panel-2"
                      id="tab-2"
                      tabIndex="-1"
                      className="tab nav-item nav-link"
                    >
                      <span className="">Second Tab</span>
                    </button>
                    <button
                      role="tab"
                      aria-selected="false"
                      aria-controls="panel-3"
                      id="tab-3"
                      tabIndex="-1"
                      className="tab nav-item nav-link"
                    >
                      <span className="">Third Tab</span>
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 relative rounded-3xl tabs_panel">
                  <div
                    role="tabpanel"
                    id="panel-1"
                    className="tab-panel p-6 transition duration-1000"
                  >
                    <h3>First tab panel</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
                    {
                        projects.map((project, index) => {
                            return (
                                <div 
                                    key={index}
                                >
                                  aaaa
                                </div>
                            )
                        })
                    }
                  </div>
                  <div
                    role="tabpanel"
                    id="panel-2"
                    className="tab-panel absolute top-0 invisible opacity-0  p-6 transition duration-1000"
                  >
                    <h3>Second tab panel</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
                  </div>
                  <div
                    role="tabpanel"
                    id="panel-3"
                    className="tab-panel absolute top-0 invisible opacity-0 p-6 transition duration-1000"
                  >
                    <h3>Third tab panel</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
                  </div>
                </div>
            </div>
         
          </div>
        
        </div>
        <img className='background-image-right' src={colorSharp2} alt="background_right" />
      </section>
    </>
  );
}

export default Projects;