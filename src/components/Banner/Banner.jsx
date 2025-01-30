import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import TypeAnimation from '@/components/Banner/TypeAnimation/TypeAnimation'
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import '@/components/Banner/Banner.css';

import arrowDown from "@/assets/img/icons/arrow-down.svg";
import headerImg from "@/assets/img/pfp/difuminado5.png";

const Banner = () => {
  const [ t ] = useTranslation("global");  
  
  const typeAnimationArray = [
    t(`banner.typeAnimation_1`), 
    t(`banner.typeAnimation_2`),
    t(`banner.typeAnimation_3`),
    t(`banner.typeAnimation_4`)
  ];
  
  const [text] = useState('');
  const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial en píxeles
  
  useEffect(() => {
    // Calcula el nuevo tamaño de fuente basado en la longitud del texto
    const newFontSize = Math.min(35, 700 / text.length); // h,w; Ajusta los valores mínimo y máximo según tus necesidades
    setFontSize(newFontSize);
  }, [text]);
  

  return(
    <>
      <section className="banner max-w-[83%] md:w-[60%] lg:w-full lg:max-w-screen-xl mx-auto text-center md:text-start mt-0 pb-[160px]" id="home">
        
        {/* slogan */}
        <div className="h-screen flex items-center mb-10">
          <h2 className={`paragraphStyles2 text-[3.7rem] w-[90%] mx-auto`}>
            {'"'}
            {t(`banner.slogan1`)}
            <strong className="text-link_color">
              {t(`banner.slogan2`)}
            </strong>
            {t(`banner.slogan3`)}
            <strong className="text-highlighted_text_color underline underline-offset-8">
              {t(`banner.slogan4`)}
            </strong>
            {'."'}
          </h2>
        </div>
          
          
        {/* banner main info */}
        <div className="flex justify-center">
          <a href="/#banner">
            <img src={arrowDown} className="animatedImg w-10 mt-[-10vw] hover:w-12 transition-all duration-150" alt="arrow-down" />
          </a>
        </div>
          
        <div className="container mx-auto flex" id="banner">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-7/12">
                
                <span className="tagline text-link_disabled_color text-xl">
                  <span className="text-sm">
                    {'🌐 '}
                  </span>
                    {t(`banner.welcome`)}
                  <span className="text-sm">
                    {' 🌐'}
                  </span>
                </span>
                
                {/* welcome box */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl mb-3">
                <span className="textShadow">{t(`banner.Fullname`)}</span>
                  <div className="h-16 lg:h-12 mt-2">
                    <span className="wrap text-highlighted_text_color" style={{ fontSize: `${fontSize}px` }}>
                      { <TypeAnimation {...typeAnimationArray}/>}
                    </span>
                  </div>
                </h1>
                
                {/* main description paragraph */}
                <p className="paragraphStyles">
                  {t(`banner.p1`)}
                  <a 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:underline hover:decoration-link_color_hover"
                    href="https://www.google.com/search?q=Full+Stack+Developer&oq=full+stack+developer&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMxNjhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
                  >
                      <strong className="text-link_color hover:text-link_color_hover">
                        {t(`banner.full_stack`)}
                      </strong>
                  </a>
                  
                  <a 
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:decoration-link_color_hover"
                    href="https://www.google.com/search?q=software+development+engineer&sca_esv=580697965&ei=Sk1MZanzOtTDkPIPwJKL2A0&oq=softwar+development+en&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnNvZnR3YXIgZGV2ZWxvcG1lbnQgZW4qAggAMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAESJxuUABYtGlwBngBkAEAmAGuAaABjCmqAQQwLjQwuAEDyAEA-AEBqAIUwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICDRAuGIoFGMcBGNEDGEPCAgUQABiABMICCBAAGIoFGLEDwgINEAAYigUYsQMYgwEYQ8ICBxAAGIoFGEPCAgoQABiKBRixAxhDwgIIEAAYgAQYsQPCAgoQABiABBixAxgKwgIHEAAYgAQYCsICEBAAGIoFGOoCGLQCGEPYAQHCAh0QABiKBRjlAhjlAhjqAhi0AhiKAxi3AxjUA9gBAcICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQLCAhYQLhgDGI8BGOUCGOoCGLQCGIwD2AECwgILEAAYigUYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICERAuGIMBGMcBGLEDGNEDGIAEwgIJEAAYDRiABBgKwgIGEAAYHhgNwgIIEAAYHhgNGArCAgsQABgeGA0Y8QQYCuIDBBgAIEGIBgG6BgQIARgHugYGCAIQARgK&sclient=gws-wiz-serp"
                    >
                      <strong className="text-link_color hover:text-link_color_hover">
                        {t(`banner.p2`)}
                      </strong>
                  </a>
                  
                  <a 
                    className="hover:underline hover:decoration-link_color_hover"
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.google.com/search?q=Technical+High+School+Diploma+in+Programming&oq=Technical+High+School+Diploma+in+Programming&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBBzQ5NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                  >
                      <strong className="text-link_color hover:text-link_color_hover">
                      {t(`banner.p3`)}
                      </strong>
                  </a>
                </p>
                
                {/* list */}
                <ul className="ml-10 list-disc">
                
                  <li className="paragraphStyles bannerList">
                    <strong className="text-highlighted_text_color">{t(`banner.description_aprendio`)}</strong>
                  </li>
                  
                  <li className="paragraphStyles bannerList">
                    <span>
                        {t(`banner.p4`)}
                        <strong className="text-highlighted_text_color">{t(`banner.description_tecnologias1`)}</strong>
                    </span>
                  </li>
                  
                  <li className="paragraphStyles bannerList">
                      {t(`banner.description_enfocado_en`)}
                      <strong className="text-highlighted_text_color">{t(`banner.description_tecnologias2`)}</strong>
                      {t(`banner.p7`)}
                  </li>
                  
                  <li className="paragraphStyles bannerList">
                      {t(`banner.description_es`)}
                  </li>
                  
                  <li className="paragraphStyles bannerList">
                      {t(`banner.description_curiosidad`)}
                  </li>
                  
                  <li className="paragraphStyles bannerList">
                    {t(`banner.description_prioriza`)}
                  </li>

                  <li className="paragraphStyles bannerList">
                    {t(`banner.description_mision`)}
                  </li>
                  
                </ul>
                

                {/* cv */}
                <div className="flex mb-6 pt-[0.8rem] w-full">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/search?q=software+development+engineer&sca_esv=580697965&ei=Sk1MZanzOtTDkPIPwJKL2A0&oq=softwar+development+en&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnNvZnR3YXIgZGV2ZWxvcG1lbnQgZW4qAggAMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAEMgcQABgNGIAESJxuUABYtGlwBngBkAEAmAGuAaABjCmqAQQwLjQwuAEDyAEA-AEBqAIUwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICDRAuGIoFGMcBGNEDGEPCAgUQABiABMICCBAAGIoFGLEDwgINEAAYigUYsQMYgwEYQ8ICBxAAGIoFGEPCAgoQABiKBRixAxhDwgIIEAAYgAQYsQPCAgoQABiABBixAxgKwgIHEAAYgAQYCsICEBAAGIoFGOoCGLQCGEPYAQHCAh0QABiKBRjlAhjlAhjqAhi0AhiKAxi3AxjUA9gBAcICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQLCAhYQLhgDGI8BGOUCGOoCGLQCGIwD2AECwgILEAAYigUYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICERAuGIMBGMcBGLEDGNEDGIAEwgIJEAAYDRiABBgKwgIGEAAYHhgNwgIIEAAYHhgNGArCAgsQABgeGA0Y8QQYCuIDBBgAIEGIBgG6BgQIARgHugYGCAIQARgK&sclient=gws-wiz-serp"
                    >
                      <button>
                        <label className="linkStyles">
                        {'📑 '}{t(`banner.cv`)}
                        </label>
                        <div className="justify-start">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
                        </div>
                      </button>
                    </a>
                </div>
                
                {/* social networks */}
                <p className="paragraphStyles"> 
                  {t(`banner.follow_me1`)} 
                </p>
              
              <div>
                  <SocialIcons />
              </div>
            </div>
            
            
            
            {/* profile picture */}
            <div className=" md:w-1/2 lg:w-5/12 mt-16 lg:mt-0 mx-auto self-start">
                <img className="animatedImg w-96 md:w-80 lg:w-[400px] rounded-full opacity-[92%] shadow-2xl ml-auto" src={headerImg} alt="Header Img" />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;