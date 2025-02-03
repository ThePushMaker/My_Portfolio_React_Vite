import './Footer.css'
import logo from '../../assets/img/logo.svg';
import MailchimpForm from "../MailchimpForm/MailchimpForm";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import SocialIconsSmall from '../SocialIconsSmall/SocialIconsSmall';

const smTextSize = 'text-[18.5px]'

const Footer = () => {
  const [ t] = useTranslation("global");
  let location = useLocation();
  // console.log(location.pathname)
  return(
    <footer className='footer px-6 md:px-14 lg:px-20 footer_shadow'>
      <div className='container mx-auto pt-16 pb-16'>
        <div className='flex flex-wrap items-center'>
          {location.pathname==='/' && <MailchimpForm />}
          <div className='w-full md:w-1/2'>
            <img src={logo} alt="logo" />
          </div>
          <div className='w-full md:w-1/2 text-end'>
            <SocialIconsSmall />
            <p className={smTextSize}> {t(`footer.copyright`)}.</p>
            <p className={smTextSize}> {t(`footer.technologies_used`)}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 