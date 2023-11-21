import { useRef } from 'react';

const EmailDisplay = ({contactEmail}) => {
  const emailRef = useRef(null);

  const copyToClipboard = () => {
    emailRef.current.select();
    document.execCommand('copy');
  };

  return(
    <div className=" bg-container_color6 my-20 py-12 rounded-[2rem] text-center px-9 lg:px-10">
        <h2 className="text-[2rem] font-bold mb-4 text-highlighted_text_color">Correo Electrónico</h2>
        <p> O si lo prefieres guardalo para más tarde</p>
    <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mt-4"> 
        <input
          ref={emailRef}
          type="text"
          value={contactEmail}
          readOnly
          className="border rounded-xl px-2 py-1.5 text-[#005] w-full lg:w-2/3"
          />
          <div className='contact w-full'>
            <input 
              className='bg-[white] bg-opacity-[4%]'
              id='fullName'
              type="text" 
              value={contactEmail} 
              onChange={(e) => onFormUpdate('fullName', e.target.value)} 
              />
          </div>
        <div className='mt-5 lg:mt-0'>
          <button  
            className="button_transparent_rounded shadow-sm shadow-border_color1 hover:shadow-md hover:shadow-neon_color2
            flex justify-center items-center w-fit border-[1.5px] border-solid border-border_color1 bg-[black] bg-opacity-40" 
            onClick={copyToClipboard}
            >
              COPIAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailDisplay;