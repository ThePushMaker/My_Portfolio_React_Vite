import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

import CustomHeader from '@/components/UI/CustomHeader/CustomHeader';
import "react-toastify/dist/ReactToastify.css";

import emailImg from '@/assets/img/icons/mail.png'

const EmailDisplay = ({ contactEmail }) => {
  const [ t] = useTranslation("global");
  const emailRef = useRef(null);

  const mostrarNotificacion = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };


  const copyToClipboard = () => {
    // seleccionar el input y copiar el contenido
    emailRef.current.select();
    document.execCommand('copy');
    
    mostrarNotificacion(t(`contact.email_copied`));
    
    // deseleccionar el input y quitar el focus
    emailRef.current.blur();
    window.getSelection()?.removeAllRanges();
  };
  
  return(
    <section className="bg-gradient-to-t from-[#151524ce] to-[#1313466c] mt-11 py-11 rounded-[6rem] text-center px-9 lg:px-10 border-[1.5px] border-solid border-border_color1">
        
      {/* title */}
      <CustomHeader
        align={"center"}
        classes={"text-highlighted_text_color"}
        text={t(`contact.copy_email_header`)}
      />
      
      <img src={emailImg} alt="email_img" className='h-40 mx-auto mb-6' />
      
      {/* description */}
      <p className='w-10/12 mx-auto text-md'>{t(`contact.copy_email`)} 😉</p>
    
      {/* email input and copy button */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mt-8">
        <div className='w-6/12'>
 
          {/* email input */}
          <input
            className='text-center bg-[#dce0ea] text-[#28004e] cursor-default w-full border-1 border-solid border-[#fff]
            rounded-[20px] py-4 px-6 font-normal text-lg tracking-[0.8px] transition-all duration-300 ease-in-out'
            name={'contactEmail'}
            readOnly
            ref={emailRef}
            type={'text'}
            value={'elmcwl@gmail.com'}
          />
          
        </div>
          
        {/* copy button */}
        <div className='mt-3 lg:mt-0'>
          <button
            className="button_transparent_rounded" 
            onClick={copyToClipboard}
            >
            <span className='hover:text-black'>
              {t(`default.copy`)}
            </span>
          </button>
        </div>
          
        {/* notificación */}
        <ToastContainer />
          
      </div>
    </section>
  );
}

export default EmailDisplay;