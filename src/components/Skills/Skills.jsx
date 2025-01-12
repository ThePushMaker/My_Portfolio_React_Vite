import { useTranslation } from 'react-i18next';

import CustomHeader from '@/components/UI/CustomHeader/CustomHeader';
import '@/components/Skills/Skills.css';
import imgSkillsJson from '@/data/skills/skills.json';

import colorSharp from '@/assets/img/color-sharp.png';

const Skills = () => {
  const [ t ] = useTranslation("global");
  
  const skills_description = 
    <span>
      {t(`skills.description1`)}
      <strong className="text-highlighted_text_color">{t(`skills.description2`)}</strong>
      {t(`skills.description3`)}
      <strong className="text-highlighted_text_color">{t(`skills.description4`)}</strong>
      {t(`skills.description5`)}
      <strong className="text-highlighted_text_color">{t(`skills.description6`)}</strong>
      {'.'}
    </span>
  ;
  
  return(
    <>
      <section className='degradado3 pb-20' id='skills'>
          <div className='skill'>
            <div className=' mx-auto px-3 md:px-14 lg:px-14 '>
              <div className='containerShadow1 skill-bx shadow-2xl pt-12 pb-16 px-[28px] md:py-[50px] md:px-[40px] lg:px-24'>
                <CustomHeader
                  align='center'
                  emoji='📚'
                  text={t(`skills.skills`)}
                />
                  <p className='text-center w-[90%] md:w-5/6 mx-auto mt-[14px] mb-6 md:mb-8 lg:mb-[70px]'
                > 
                    {skills_description}
                  </p>
                
                <div className='skills_grid skill-slider lg:mb-0'>
                
                  {imgSkillsJson.map((item, index) => (
                    <div className='item mx-10' key={index}>
                      <img src={item.img} alt={item.label} />
                      <h5>
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
          <img className='background-image-left opacity-50' src={colorSharp} alt="ImageBackground" />
      </section>

    </>
  );
}

export default Skills;