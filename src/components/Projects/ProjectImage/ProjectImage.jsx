import { useEffect, useState } from 'react';

import notFoundImage_en from '@/assets/img/404/404_en.png'
import notFoundImage_es from '@/assets/img/404/404_es.png'

const ProjectImage = ({ imgPath, title, classes }) => {
  const storedLanguage = localStorage.getItem('language');
  const [image, setImage] = useState(null);
  
  useEffect(() => {
    if(!imgPath) {
        setImage(storedLanguage === 'es' ? notFoundImage_es : notFoundImage_en)
    }else {
      setImage(imgPath)
    }
  },[storedLanguage, imgPath])
    
  return (
    <img
      className={classes}
      src={image || notFoundImage_en}
      alt={title}
    />
  )
}

export default ProjectImage;