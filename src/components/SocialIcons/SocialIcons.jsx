import { Tooltip } from 'react-tooltip';

import navIcon1 from '../../assets/img/icons/nav-icon1.svg';
import navIcon2 from '../../assets/img/icons/nav-icon2.svg';
import navIcon3 from '../../assets/img/icons/nav-icon3.svg';
import navIcon4 from '../../assets/img/icons/nav-icon4.svg';

const stylesLink = 'w-[43px] h-[43px]';

const imagesArray = [
  {
    id: 1,
    src: navIcon1,
    dataTooltip: 'LinkedIn',
    href: 'https://www.linkedin.com/in/martin-calderon-dev'
  },
  {
    id: 2,
    src: navIcon2,
    dataTooltip: 'GitHub',
    href: 'https://github.com/DSW-47'
  },
  {
    id: 3,
    src: navIcon3,
    dataTooltip: 'YouTube Channel',
    href: 'https://www.youtube.com/channel/UCNy0OJqXOCyhThyXTcLLCJA?sub_confirmation=1'
  },
  {
    id: 4,
    src: navIcon4,
    dataTooltip: 'WakaTime Stats',
    href: 'https://wakatime.com/@dsw47'
  },
];

const SocialIcons = () => {
  return(
    <>
      <div className='social-icon'>
      {imagesArray.map((item, index) => (
        <a key={index} data-tooltip-id='myTooltip' data-tooltip-content={item.dataTooltip} className={stylesLink} href={item.href}>
          <img src={item.src} target='_blank' rel='noreferrer' />
        </a>
      ))}
      <Tooltip id={'myTooltip'} place='top' type='dark' effect='solid' style={{fontSize:'17px'}}/>
      </div>
      
    </>
  );
}

export default SocialIcons;