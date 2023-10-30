import './Loading.css'
import loadingImg from '../../assets/img/loading1.svg'
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const [ t ] = useTranslation("global");

  return(
    <div className='bg flex h-screen justify-center items-center text-[white]'>
      <div className='main_container'>
        <span className='text-[45px]'>
          {t(`default.loading`)}{'...'}
          <img src={loadingImg} alt='loading-img' />
        </span>
      </div>
    </div>
  );
}

export default Loading;