import './TransparentInput.css'
const TransparentInput = ({ autoComplete, name, onChange, placeholder, type, value }) => {

  return(
    <div className='w-full transparentInput'>
      <input 
        autoComplete={autoComplete}
        className='bg-[white] bg-opacity-[4%]'
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type} 
        value={value}
        />
    </div>
  );
}

export default TransparentInput;