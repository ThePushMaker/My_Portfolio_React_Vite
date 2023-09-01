import '../../components/Footer/Footer.css'

import './Footer.css'
import MailchimpForm from './MailchimpForm/MailchimpForm';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

const Footer = () => {
  return(
    <footer className='footer px-6 md:px-14 lg:px-20'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center'>
          <MailchimpForm />
          <div className='w-full md:w-1/2'>
            <img src={logo} alt="logo" />
          </div>
          <div className='w-full md:w-1/2 text-center text-sm text-end'>
            <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/martin-calderon-dev">
                  <img src={navIcon1} alt="navIcon1" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/DSW-47">
                  <img src={navIcon2} alt="navIcon2" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNy0OJqXOCyhThyXTcLLCJA?sub_confirmation=1">
                  <img src={navIcon3} alt="navIcon3" />
                </a>
            </div>
            <p>© 2023 Martín Calderón. All Rights Reserved.</p>
            <p>This website has been developed using the technologies React, Tailwind, and Vite.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 