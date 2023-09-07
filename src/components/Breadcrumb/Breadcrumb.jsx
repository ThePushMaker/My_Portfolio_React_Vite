import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
  useEffect(() => {
  });
  // console.log(props.URL)

  // Divide la URL en partes usando la barra diagonal como separador
  const URLParts = props.URL.split('/').filter(part => part !== '');
  
  // Inicializa el array de elementos del breadcrumb con el enlace a la página de inicio
  const breadcrumbItems = [{ to: '/', label: 'Home' }];
  
  // Variable para rastrear la URL actual
  let currentUrl = '';
  
  // Itera sobre las partes de la URL y crea dinámicamente los elementos del breadcrumb
  URLParts.forEach((part, index) => {
    // Construye la URL actual
    currentUrl += `/${part}`;
    
    // Agrega el elemento al breadcrumb
    breadcrumbItems.push({ to: currentUrl, label: part });
    console.log(breadcrumbItems)
  
  }, []);
 
  
  return(
    <>
    
      <div className='text-start py-2 italic mb-3'>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.to}>
            <Link to={item.to} 
              className='text-link_color hover:text-link_color_hover hover:underline'> 
              {item.label}
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