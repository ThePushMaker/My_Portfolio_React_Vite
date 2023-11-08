import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getSlugByURL } from '../../routes';

const BreadCrumb = () => {
  const [ t ] = useTranslation("global");  
  
  const url=location.pathname;
  // p
  console.log('slug', getSlugByURL(url));
  
  //split the actual url using the '/' separator when crumb is not an empty string
  const crumbs = url.split('/')
    .filter(crumb => crumb !== '');
  
  // Inicializa el array de elementos del breadcrumb con el enlace a la página de inicio
  const breadcrumbItems = [{ to: '/', label: 'Home' }];
  

  let currentUrl = '';  
  // Itera sobre las partes de la URL y crea dinámicamente los elementos del breadcrumb
  crumbs.forEach((crumb, index) => { 
    // Construye la URL actual
    currentUrl += `/${crumb}`;
    
    console.log(crumb)  
  
    // Agrega el elemento al breadcrumb
    breadcrumbItems.push({ to: currentUrl, label: crumb });
  }, []);

 
  
  return(
    <>
      <div className='text-start italic mb-3 text-text_dark-gray container_color3 px-7 py-[1.2rem] rounded-[1.2rem] w-fit border-solid border-[1px] border-[#babec3] '>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.to}>
            <Link to={item.to} 
              className='text-[20.5px] text-dark_link_color hover:text-dark_link_color_hover2 hover:underline px-[0.8rem]'> 
              {item.label}
              {/* {t(`navbar.${item.label}`)} */}
            </Link>
            { index < breadcrumbItems.length - 1 && (<span className='normal_font_family_aux'> {'/'} </span>) }
            {/* {' / '} */}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default BreadCrumb;