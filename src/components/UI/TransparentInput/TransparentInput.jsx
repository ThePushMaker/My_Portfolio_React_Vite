const TransparentInput = ({value, placeholder}) => {

  return(
    <input 
    className='bg-[white] bg-opacity-[4%]'
    id='fullName'
    type="text" 
    value={value} 
    placeholder={placeholder}
    onChange={(e) => onFormUpdate('fullName', e.target.value)} 
    />
  );
}

export default TransparentInput;