const CustomHeader = ({ emoji, text }) => {

  return(

    <h2 className="md:text-[50px] lg:text-left mb-4">
      <span className='emoji_size'>{emoji} </span>
        {text}
      <span className='emoji_size'> {emoji}</span>
    </h2>

  );
}

export default CustomHeader;