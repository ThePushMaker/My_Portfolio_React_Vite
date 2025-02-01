import { useTranslation } from 'react-i18next';

import CustomHeader from '@/components/UI/CustomHeader/CustomHeader';
import imgSkillsJson from '@/data/skills/skills.json';

const Skills = () => {
  const [ t ] = useTranslation("global");
  
  const skills_description =
    <span>
      {t(`skills.description1`)}
      <strong className="text-highlighted_text_color">{t(`skills.description2`)}</strong>
      {t(`skills.description2_2`)}
      <strong className="text-highlighted_text_color">{t(`skills.description2_3`)}</strong>
      {t(`skills.description3`)}
      <strong className="text-highlighted_text_color">{t(`skills.description4`)}</strong>
      {t(`skills.description5`)}
      <strong className="text-highlighted_text_color">{t(`skills.description5_2`)}</strong>
      {t(`skills.description5_3`)}
      <strong className="text-highlighted_text_color">{t(`skills.description6`)}</strong>
      {t(`skills.description7`)}
      <strong className="text-highlighted_text_color">{t(`skills.description7_1`)}</strong>
      {t(`skills.description7_2`)}
      <strong className="text-highlighted_text_color">{t(`skills.description7_3`)}</strong>
    </span>
  ;
  
  return(
    <>
      <section className='degradado3 pb-20' id='skills'>
          <div className='skill'>
            <div className=' mx-auto px-3 md:px-14 lg:px-14 '>
              <div className='containerShadow1 shadow-2xl pt-12 pb-16 px-[28px] md:py-[50px] md:px-[40px] lg:px-24 rounded-[55px] text-center mt-[-60px] bg-container_color6'>
              
                <CustomHeader
                  align='center'
                  emoji='📚'
                  text={t(`skills.skills`)}
                />
                {/* description */}
                <p className='text-left w-[95%] text-mdsm2 mx-auto mt-[14px] mb-6 md:mb-8 lg:mb-[70px]'
                >
                  {skills_description}
                </p>
                
                <div className='w-full flex flex-wrap gap-x- md:gap-4 gap-y-5 md:gap-y-7 justify-center mx-auto pb-14 lg:mb-0'>
                  {imgSkillsJson.map((item, index) => (
                    
                    <div
                      className='flex flex-col md:flex-row items-center text-[1.2rem] basis-[calc(100%/4)] md:basis-[calc(100%/5)] lg:basis-[calc(100%/08)]'
                      key={index}
                    >
                      <img
                        className='rounded-lg w-8 h-8 md:w-9 mx-auto md:mx-0 md:mr-3'
                        src={item.img}
                        alt={item.label}
                        />
                      <h5 className='text-base mt-1.5 md:mt-0'>
                        {/* extrae la clave dentro de t('...') y la traduce */}
                        {item.label.startsWith("t(")
                          ? t(item.label.slice(3, -2)) //extrae la clave dentro de t('...')
                          : item.label
                        }
                      </h5>
                    </div>
                    
                  ))}
                </div>
              
              </div>
            </div>
          </div>
      </section>

    </>
  );
}

export default Skills;