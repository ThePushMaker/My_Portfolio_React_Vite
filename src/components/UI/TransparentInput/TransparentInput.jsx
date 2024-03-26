const TransparentInput = ({ autoComplete, name, onChange, placeholder, readOnly, type, value }) => {

  return(
    <div className='w-full transparentInput bg_white_hover'>
      <input 
        autoComplete={autoComplete}
        className='bg-[white] bg-opacity-[4%]'
        name={name}
        readOnly={readOnly}
        onChange={onChange}
        placeholder={placeholder}
        type={type} 
        value={value}
      />
    </div>
  );
}

export default TransparentInput;