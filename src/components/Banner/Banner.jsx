import { useEffect, useState } from "react";
import headerImg from "../../assets/img/pfp/difuminado2.png";
import './Banner.css';
import TypeAnimation from './TypeAnimation/TypeAnimation'

const fullStackDefinition = "Fullstack Web Developer (Desarrollador Web 'Todo-Terreno'): Un ser mágico capaz de navegar por las profundidades de los códigos front-end y back-end con la gracia de un equilibrista. Su habilidad para hablar en múltiples lenguajes de programación es tan impresionante como su capacidad para lidiar con los errores en medio de la noche. Se dice que los Fullstack Web Developers tienen una relación cercana con el café y una paciencia inquebrantable para lidiar con los problemas técnicos. ¡Convierte el caos digital en elegantes sitios web y aplicaciones, todo mientras mantiene una sonrisa en el rostro!"

const description = 
<span>
  I{"'"}m a 23-years-old{' '}
  <a className="hover:underline  hover:decoration-link_color_hover" target="_blank" rel="noreferrer" href="https://www.google.com/search?q=Full+Stack+Developer&oq=Full+Stack+Developer&aqs=chrome..69i57j0i512l9.387j0j7&sourceid=chrome&ie=UTF-8&bshm=rimc/1">
    <span className="text-link_color hover:text-link_color_hover"> 
      <strong data-tooltip-id="myTooltip" data-tooltip-content="Where one person juggles both the front-end and back-end with the grace of a one-person band. 🎸" data-tip="myTooltip" >Full Stack Web Developer</strong>
    </span>
  </a>
  {' '}who{"'"}s passionate about all forms of virtual art creation. Although my youth may limit my experience a bit, my motivation is powerful and drives me every day to advance and learn much more. I would like to demonstrate through my efforts that software is not merely cold and mechanical logic; it{"'"}s not just a tool, but it has the potential to become something authentically artistic, fascinating, and brimming with identity. Software is not a thing of tomorrow; it is of today.
</span>

const Banner = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial en píxeles

  useEffect(() => {
    // Calcula el nuevo tamaño de fuente basado en la longitud del texto
    const newFontSize = Math.min(35, 700 / text.length); // h,w; Ajusta los valores mínimo y máximo según tus necesidades
    setFontSize(newFontSize);
  }, [text]);



  return(
    <>
      <section className="banner px-6 md:px-14 lg:px-24 mt-0 pt-[260px] pb-[100px]" id="home">
        <div className="container mx-auto flex">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-7/12">
              <div>
                <span className="tagline text-link_disabled_color">Welcome to my portfolio</span>
                <h1 className="text-4xl md:text-5xl lg:text-5xl mb-3">{"Hi, I'm Martín Calderón! "}                           
                  <div className="h-16 md:h-[90px] lg:h-12 mt-2">
                    <span className="wrap text-highlighted_text_color" style={{ fontSize: `${fontSize}px` }}>{ <TypeAnimation />}</span>
                  </div>
                </h1>
                <p className="mb-2">{description}</p>
                <p>Follow me on <a className="text-link_color hover:text-link_color_hover hover:underline" target="_blank" rel="noreferrer" href="https://linktr.ee/martin_calderon"> my social media</a>.</p>
              </div>
              <div>
                <a href="#contact">
                  <button className="mt-4" onClick={() => console.log('connect')}>
                    <label className="text-link_color hover:text-link_color_hover hover:underline">
                      {"Let's Connect!"}
                    </label>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
                  </button>
                </a>
              </div>
            </div>
            <div className=" md:w-1/2 lg:w-5/12 mt-16 mx-auto">
              <div className="">
                <img className="w-64 md:w-80 lg:w-[400px] rounded-full opacity-[92%] shadow-2xl ml-auto" src={headerImg} alt="Header Img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;