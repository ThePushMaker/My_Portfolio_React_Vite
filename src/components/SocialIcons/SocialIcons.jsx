import { Tooltip } from 'react-tooltip';
import navIcon1 from '../../assets/img/icons/nav-icon1.svg';
import navIcon2 from '../../assets/img/icons/nav-icon2.svg';
import navIcon3 from '../../assets/img/icons/nav-icon3.svg';
import navIcon4 from '../../assets/img/icons/nav-icon4.svg';
import { useTranslation } from 'react-i18next';
import './SocialIcons.css'

const stylesLink = 'w-11 h-11 mx-[3px]';

const SocialIcons = () => {
  const [ t ] = useTranslation("global"); 
  
  const imagesArray = [
    {
      id: 1,
      src: navIcon2,
      href: 'https://github.com/MSCO-2000',
      label: 'GitHub'
    },
    {
      id: 2,
      src: navIcon1,
      href: 'https://www.linkedin.com/in/martin-calderon-dev',
      label: 'LinkedIn'
    },
    {
      id: 3,
      src: navIcon3,
      dataTooltip: 'Programación para Todos',
      href: 'https://www.youtube.com/channel/UCNy0OJqXOCyhThyXTcLLCJA?sub_confirmation=1',
      label: t(`navbar.YouTube`)
    },
  ];
  
  return(
    <>
      <div className='social-icon'>
        {imagesArray.map((item, index) => (
          <a key={index} className={stylesLink} href={item.href} target='_blank' rel='noreferrer' data-tooltip-id='myTooltip' data-tooltip-content={item.dataTooltip}>
            <img src={item.src} />
            <label>{item.label}</label>
          </a>
        ))}
        <Tooltip id={'myTooltip'} place='top' type='dark' effect='solid'  style={{fontSize:'17px'}}/>
      </div>
    </>
  );
}

export default SocialIcons;