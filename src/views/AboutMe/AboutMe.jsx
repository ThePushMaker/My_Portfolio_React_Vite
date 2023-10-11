import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [ t ] = useTranslation("global");  
  
  const linkStyles = 'text-link_color hover:text-link_color_hover hover:underline textShadow cursor-pointer'
  const paragraphStyles = 'mb-2 textShadow text-[#ddd]'
  
  return(
    <section className="text-center md:text-start mt-0 " id="aboutMe">
      <div className="w-full flex my-32 bg-[#113] bg-opacity-90 py-20 px-6 md:px-14 lg:px-24">
        <div className="w-full lg:w-5/12 pr-32 my-auto">
          <div className="animatedImg w-96 md:w-80 lg:w-[400px]">
            <img className=" rounded-md opacity-[92%] shadow-2xl mb-3" src={'https://i.gifer.com/3AyY.gif'} alt="Header Img2" />
            <p className={`${paragraphStyles} text-[18px]`}>{t(`banner.img_description`)}.</p>
          </div>
        </div>
        <div className="w-full lg:w-7/12 mr-14">
          <h2 className="mb-3 text-right">
          <span className='text-[32px]'>🚀 </span>
            More About me 
          <span className='text-[32px]'> 🚀</span>
          </h2>
          <p className={`${paragraphStyles}`}>{t(`banner.paragraph2`)}.</p>
          <p className={`${paragraphStyles}`}>{t(`banner.paragraph3`)}.</p>
          <p className={`${paragraphStyles}`}>{t(`banner.paragraph4`)}.</p>
          <h3 className="text-[1.6rem] mb-3 text-center">Clasificaciones 🤓:</h3>
          <p className={`${paragraphStyles} text-center`}>
            <a className={linkStyles} target="_blank" rel="noreferrer" href="https://www.google.com/search?q=intj&oq=intj&gs_lcrp=EgZjaHJvbWUyDggAEEUYORhDGLEDGIoFMgkIARAAGEMYigUyCQgCEAAYQxiKBTIJCAMQABhDGIoFMgkIBBAAGEMYigUyCQgFEAAYQxiKBTIJCAYQABhDGIoFMgkIBxAAGEMYigUyBwgIEAAYjwIyBwgJEAAYjwLSAQc1OTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"> 
              MBTI: INTJ 
            </a> | 
            <a className={linkStyles} target="_blank" rel="noreferrer" href="https://www.google.com/search?q=5w4&oq=5w4&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBBzIwNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8">
              Eneagrama: 5w4 
            </a> | 
            <a className={linkStyles} target="_blank" rel="noreferrer" href="https://www.google.com/search?q=disc+dc&oq=disc+dc&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDEyMzFqMWo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
              DISC: DC
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;