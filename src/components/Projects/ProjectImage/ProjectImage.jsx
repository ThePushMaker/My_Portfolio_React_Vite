import './ProjectImage.css'
import notFoundImage_en from '../../../assets/img/404/404_en.png'
import notFoundImage_es from '../../../assets/img/404/404_es.png'
import { useEffect, useState } from 'react';

const ProjectImage = ({ imgPath, title }) => {
  const storedLanguage = localStorage.getItem('language');
  const [image, setImage] = useState([]); 

  useEffect(() => {
    if(!imgPath) {
       if(storedLanguage === 'es') {
        setImage(notFoundImage_es)
      }else {
        setImage(notFoundImage_en)
      }
    }else {
      setImage(imgPath)
    }
  },[storedLanguage])
    
  return (
    <img src={image} alt='project_image' 
      className="object-cover text-center w-screen h-full"
    />
  )
}

export default ProjectImage;