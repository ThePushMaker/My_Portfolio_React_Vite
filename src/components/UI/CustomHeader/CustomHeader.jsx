const CustomHeader = ({ emoji, text, align, classes }) => {

  return(

    <h2
      className={`text-3xl mb-3
        ${align==='left'? 'lg:text-left' : ''}
        ${align==='center'? 'lg:text-center' : ''}
        ${align==='right'? 'lg:text-right' : ''}
        ${classes}`}
    >
      <span className='emoji_size'>{emoji} </span>
        {text}
      <span className='emoji_size'> {emoji}</span>
    </h2>

  );
}

export default CustomHeader;