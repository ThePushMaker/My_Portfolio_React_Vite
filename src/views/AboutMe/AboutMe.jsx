import { useTranslation } from "react-i18next";
import CustomHeader from '../../components/UI/CustomHeader/CustomHeader'

const AboutMe = () => {
  const [t] = useTranslation("global");

  const linkStyles = 'text-link_color hover:text-link_color_hover hover:underline textShadow cursor-pointer'
  const paragraphStyles = 'mb-2 textShadow text-[#ccc]'

  return (
    <section className="text-center md:text-start mt-0" id="aboutMe">
      <div className="bg_semitransparent px-6 md:px-14 lg:px-24 pt-0 pb-16 mx-auto">

        <hr className="hr5" />
        
        {/* left */}
        <div className="flex flex-wrap-reverse pt-14">
          <div className="w-full lg:w-6/12 lg:px-8 my-auto flex justify-center">
            <div className="animatedImg w-96 md:w-80 lg:w-[550px]">
              <p className={`${paragraphStyles} text-[30px] font-bold text-center`}>{t(`about_me.img_description`)}</p>

              <img 
                className=" rounded-[3rem] opacity-[92%] mt-5 border-[1.5px] border-border_color1 shadow-[0_2px_12px] shadow-dark_link_color"
                src={'/src/assets/img/about_me.gif'}
                alt="Header Img2"
              />
              {/* <img className=" rounded-md opacity-[92%] shadow-2xl mb-4"
                src={'https://camo.githubusercontent.com/bc425a5c4e99161dca81a32820bad4d14290d90de6308f16eb8e1d904526f5ab/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f44353631324151474f6d77664945356d6c57412f61727469636c652d636f7665725f696d6167652d736872696e6b5f3732305f313238302f302f313637343631373934373232383f653d3231343734383336343726763d6265746126743d4654555f697351365659665635445f7565464850577654385a716744654a47337972384d69386c70666b30'} 
                alt="Header Img2"
              /> */}
            </div>

          </div>

          {/* right */}
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

            <p className={`${paragraphStyles} `}>
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