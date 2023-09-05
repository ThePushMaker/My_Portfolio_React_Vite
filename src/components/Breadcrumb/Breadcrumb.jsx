import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ items }) => {

  return(
    <>
      <div className='text-start text-lg py-2 italic mb-3'>
        {items.map((item, index) => (
          <React.Fragment key={item.to}>
            <Link to={item.to} 
              className='text-link_color hover:text-link_color_hover hover:underline'> 
              {item.label}
            </Link>
            { index < items.length - 1 && ' / ' }
            {/* {' / '} */}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default BreadCrumb;