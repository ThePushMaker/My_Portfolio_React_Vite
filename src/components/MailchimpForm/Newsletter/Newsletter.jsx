import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Newsletter = ({ onValidated, status, message }) => {
  const [ t] = useTranslation("global"); 
  const [email, setEmail] = useState('');
  const [isValidated, setIsValidated] = useState('');

  useEffect(() => {
    if(message != null){
      var indiceParentesis = message.indexOf('(');
      // Extraer la parte del mensaje antes del paréntesis
      var mensajeSinParentesis = message.substring(0, indiceParentesis).trim();
    }
    
    if (status === 'success'){
      if(message === 'Thank you for subscribing!') {message=t(`newsletter.subscribed`)}
      if(message === 'You\'re already subscribed, your profile has been updated. Thank you!') {message=t(`newsletter.already_subscribed`)}
      setIsValidated({ status: "success", message: message });
      clearFields();
    } else if (status === 'error'){
      if(mensajeSinParentesis === '0 - La parte del dominio de la dirección de correo electrónico no es válida') {message=t(`newsletter.error_invalid_email`)}
      if(message === 'Too many subscribe attempts for this email address. Please try again in about 5 minutes. (#5624)') {message=t(`newsletter.chill_out`)}
      if(message === 'Recipient "elmcwl@gmail.com" has too many recent signup requests') {message=t(`newsletter.chill_out2`)}
      setIsValidated({ status: "error", message: message });
      clearFields();
    } 
  }, [status])

  const handleSubmit = (e) => { 
    setIsValidated({ status: "", message: "" });
    e.preventDefault();
    
    if(!email){
      setIsValidated({ status: "blankData", message: t(`newsletter.write_email`) });
    }else {
      email && 
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email 
      })
    }
}

const clearFields = () => {
  setEmail('');
}
  
  return(
    <div className="w-full">
      <div className="newsletter-bx
      py-[20px]
      md:py-[50px] px-10  
      lg:py-[85px] lg:px-24 xl:px-[125px]">
        <div className="flex flex-wrap items-center w-full">
          <div className="w-full lg:w-5/12 py-3">
            <p className="text-[1.2rem] md:text-[1.5rem] lg:mr-4 text-container_color5 font-bold text-center"> {t(`newsletter.main_message`)} </p>
          </div>
          <div className="w-full lg:w-7/12 py-3">
            <form onSubmit={handleSubmit}>
               <div className="flex flex-wrap justify-end">
                <div className="new-email-bx w-full mb-3 md:m-0 
                  md:w-7/12"
                >
                  <input 
                    className="focus:outline-border_color1 focus:ring-border_color1 w-full"
                    id="email2"
                    value={email} 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder= {t(`newsletter.placeholder_email`)}
                    />
                </div>
                <div className="w-fit m-auto 
                   md:m-0 md:pl-3 "
                >
                  <button className="newsletter_button  bg-[black] bg-opacity-[88%] w-fit" type="submit">
                    <span className="">
                      {t(`newsletter.submit`)}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center flex justify-center">
            {status === 'sending' && 
              <div className="border px-4 rounded-lg relative bottom-[-50px] py-6" 
                role="alert"
              >
                <strong className="font-bold">{t(`newsletter.sending`)}</strong>
              </div>
            }
            {isValidated.status === 'error' && 
              <div className="alert_red border px-4 rounded-lg relative bottom-[-65px] py-6" 
                  role="alert"
                >
                  <strong className="font-bold">{isValidated.message}</strong>
              </div>
            }
            {isValidated.status === 'success' &&  
              <div className="alert_green  border px-4 rounded-lg relative bottom-[-50px] py-6" 
                  role="alert"
                >
                  <strong className="font-bold">{isValidated.message}</strong>
              </div>
            }
            {isValidated.status === 'blankData' &&
             <div className="alert_red  border px-4 rounded-lg relative bottom-[-50px] py-6" 
                role="alert"
              >
                <strong className="font-bold">{isValidated.message}</strong>
              </div>
            }
            </div>
      </div>
    </div>
  );
}

export default Newsletter;