import './Footer.css'
import logo from '../../assets/img/logo.svg';
import MailchimpForm from "../MailchimpForm/MailchimpForm";
import { useLocation } from "react-router-dom";
import SocialIcons from '../SocialIcons/SocialIcons';

const smTextSize = 'text-[17px]'

const Footer = () => {
  let location = useLocation();
  // console.log(location.pathname) 
  return(
    <footer className='footer px-6 md:px-14 lg:px-20'>
      <div className='container mx-auto pt-16 pb-16'>
        <div className='flex flex-wrap items-center'>
          {location.pathname==='/' && <MailchimpForm />}
          <div className='w-full md:w-1/2'>
            <img src={logo} alt="logo" />
          </div>
          <div className='w-full md:w-1/2 text-end'>
            <SocialIcons />
            <p className={smTextSize}>© 2023 Martín Calderón. All Rights Reserved.</p>
            <p className={smTextSize}>This website has been developed with React, Tailwind, and Vite.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 