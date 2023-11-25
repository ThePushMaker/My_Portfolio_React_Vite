import { useTranslation } from "react-i18next";
import CustomHeader from '../../components/UI/CustomHeader/CustomHeader'

const AboutMe = () => {
  const [ t ] = useTranslation("global");  
  
  const linkStyles = 'text-link_color hover:text-link_color_hover hover:underline textShadow cursor-pointer'
  const paragraphStyles = 'mb-2 textShadow text-[#ccc]'
  
  return(
    <section className="text-center md:text-start mt-0" id="aboutMe">
      <div className="bg_semitransparent px-6 md:px-14 lg:px-24 pt-0 pb-16 mx-auto">
      <hr className="hr5"/>
        <div className="flex flex-wrap pt-14">
          <div className="w-full lg:w-6/12 lg:px-8 my-auto flex justify-center">
            <div className="animatedImg w-96 md:w-80 lg:w-[500px]">
              <img className=" rounded-md opacity-[92%] shadow-2xl mb-3" src={'https://i.gifer.com/3AyY.gif'} alt="Header Img2" />
              <p className={`${paragraphStyles} text-[18px]`}>{t(`about_me.img_description`)}.</p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 text-center lg:text-left">
            <CustomHeader
              align='left'
              emoji='🚀'
              text={t(`about_me.more_about_me`)}
            />
            <div className="w-[90%] mx-auto lg:ml-0 text-left">
              <p className={`${paragraphStyles} pb-4`}>
                {t(`about_me.paragraph1_1`)}
                <strong className="text-highlighted_text_color">{t(`about_me.paragraph1_2`)}</strong>
                {'.'}
              </p>
              <p className={`${paragraphStyles} pb-4`}>
                {t(`about_me.paragraph2_1`)}
                <strong className="text-highlighted_text_color">{t(`about_me.paragraph2_2`)}</strong>
                {t(`about_me.paragraph2_3`)}
                {'.'}
              </p>
              <p className={`${paragraphStyles} pb-4`}>
                {t(`about_me.paragraph3_1`)}
                <strong className="text-highlighted_text_color">{t(`about_me.paragraph3_2`)}</strong>
                {t(`about_me.paragraph3_3`)}
                {'.'}
              </p>
            </div>
            <h3 className="text-[1.6rem] mb-3 text-center">{t(`about_me.classifications`)}<span className="text-[21px]">🤓</span>:</h3>
            <p className={`${paragraphStyles} text-center`}>
              <a className={linkStyles} target="_blank" rel="noreferrer" href="https://www.google.com/search?q=intj&oq=intj&gs_lcrp=EgZjaHJvbWUyDggAEEUYORhDGLEDGIoFMgkIARAAGEMYigUyCQgCEAAYQxiKBTIJCAMQABhDGIoFMgkIBBAAGEMYigUyCQgFEAAYQxiKBTIJCAYQABhDGIoFMgkIBxAAGEMYigUyBwgIEAAYjwIyBwgJEAAYjwLSAQc1OTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"> 
                MBTI: INTJ 
              </a>{' | '}  
              <a className={linkStyles} target="_blank" rel="noreferrer" href="https://www.google.com/search?q=1w9&sca_esv=579932655&ei=L2lJZef6J8zokPIPhLe30Ak&ved=0ahUKEwinzo3KtrCCAxVMNEQIHYTbDZoQ4dUDCBA&uact=5&oq=1w9&gs_lp=Egxnd3Mtd2l6LXNlcnAiAzF3OTIHEAAYigUYQzIFEAAYgAQyBxAAGIoFGEMyBxAAGIoFGEMyBRAAGIAEMgUQABiABDIHEAAYigUYQzIFEAAYgAQyBRAAGIAEMgUQABiABEiJDlDGBVj9C3ABeAGQAQCYAYgBoAGPA6oBAzAuM7gBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgILEAAYigUYsQMYgwHCAggQABiABBixA8ICCxAAGIAEGLEDGIMB4gMEGAAgQYgGAZAGCg&sclient=gws-wiz-serp">
              {t(`about_me.enneagram`)} : 1w9 
              </a>{' | '}  
              <a className={linkStyles} target="_blank" rel="noreferrer" href="https://www.google.com/search?q=disc+dc&oq=disc+dc&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDEyMzFqMWo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
                DISC: DC
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;