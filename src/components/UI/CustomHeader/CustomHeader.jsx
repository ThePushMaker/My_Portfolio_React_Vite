const CustomHeader = ({ emoji, text, align }) => {

  return(

    <h2 className={`${align==='left'? 'lg:text-left' : ''} ${align==='center'? 'lg:text-center' : ''} ${align==='right'? 'lg:text-right' : ''}  md:text-[2.8rem]  mb-4`}>
      <span className='emoji_size'>{emoji} </span>
        {text}
      <span className='emoji_size'> {emoji}</span>
    </h2>

  );
}

export default CustomHeader;