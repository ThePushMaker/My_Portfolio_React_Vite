import { Link } from 'react-router-dom';
import './NotFound.css'
import NotFoundTranparentImg from '../../assets/img/404/404_transparent.png'

const NotFound = () => {

  const linkStyles = 'text-link_color hover:text-link_color_hover hover:underline textShadow cursor-pointer'

  return(
    <>
      <div className="simple_background flex  h-screen justify-center items-center text-[white]">
        <div>
          <h2 className='text-link_disabled_color'>
            Not Found
          </h2>
   
          <img src={NotFoundTranparentImg} alt='Not_Found_Image'  className="w-[450px] mx-auto" />
     
          <p className='text-center text-[#ddd]'>This page cannot be found</p>
  
          <Link
          to="/"
          >
            <button  
              className="button_transparent_rounded shadow-sm shadow-border_color1 hover:shadow-md hover:shadow-neon_color2
              flex m-auto justify-center mt-6 w-fit border-[1.5px] border-solid border-border_color1 bg-[black] bg-opacity-40" 
            >
              <span>
                Back to homepage
                {/* {t('TabPanelItem.display_more')} */}
                {/* {mostrarMas ? "Display Less" : "Display More"} */}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;