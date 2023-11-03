import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BreadCrumb = () => {
  const [ t ] = useTranslation("global");  
  
  console.log(location.pathname);
  //split the actual url using the '/' separator when crumb is not an empty string
  const crumbs = location.pathname.split('/')
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
      <div className='text-start italic mb-3 text-text_dark-gray bg-container_color6 px-7 py-4 rounded-full w-fit'>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.to}>
            <Link to={item.to} 
              className='text-[20.5px] text-dark_link_color hover:text-dark_link_color_hover2 hover:underline px-2'> 
              {item.label}
              {/* {t(`navbar.${item.label}`)} */}
            </Link>
            { index < breadcrumbItems.length - 1 && ' / ' }
            {/* {' / '} */}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default BreadCrumb;