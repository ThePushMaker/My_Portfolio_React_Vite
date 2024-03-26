import loadingImg from '../../assets/img/loading1.svg'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Loading = () => {
  const [ t, i18n ] = useTranslation("global");

  // get navigator default langugage & convert it to a compatible code to set it as the app language
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    
    // if doesn't exist
    if(!storedLanguage) {
      const languageCode = navigator.language;
      const parts = languageCode.split('-');
      
      changeLang(parts[0])
    }
  }, []); 
  
  const changeLang = newLng => {
    i18n.changeLanguage(newLng);
    localStorage.setItem('language', newLng);
  }
  
  return(
    <div className='simple_background flex h-screen justify-center items-center text-[white]'>
      <div>
        <span className='text-[45px]'>
          {t(`default.loading`)}{'...'}
          <img src={loadingImg} alt='loading-img' />
        </span>
      </div>
    </div>
  );
}

export default Loading;