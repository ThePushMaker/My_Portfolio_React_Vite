import { Link } from 'react-router-dom';
import './NotFound.css'
import NotFoundTranparentImg from '../../assets/img/404/404_transparent.png'
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const [ t ] = useTranslation("global");  
  
  return(
    <>
      <div className="simple_background flex  h-screen justify-center items-center text-[white]">
        <div>
          <h2 className='text-link_disabled_color'>
            {t('default.not_found_title')}
          </h2>
   
          <img src={NotFoundTranparentImg} alt='Not_Found_Image'  className="w-[450px] mx-auto" />
     
          <p className='text-center text-[#ddd]'>{t('default.not_found_message')}{'.'}</p>
  
          <Link
          to="/"
          >
            <button  
              className="button_transparent_rounded shadow-sm shadow-border_color1 hover:shadow-md hover:shadow-neon_color2
              flex m-auto justify-center mt-6 w-fit border-[1.5px] border-solid border-border_color1 bg-[black] bg-opacity-40" 
            >
              <span>
                
                {t('default.not_found_button')}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;