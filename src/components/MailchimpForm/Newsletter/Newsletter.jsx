import { useState, useEffect } from "react";

const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState('');
  const [isValidated, setIsValidated] = useState('');

  useEffect(() => {
    if (status === 'success'){
      setIsValidated({ status: "success", message: message });
      clearFields();
    } else if (status === 'error'){
      setIsValidated({ status: "error", message: message });
      clearFields();
    } 
  }, [status])

  const handleSubmit = (e) => { 
    setIsValidated({ status: "", message: "" });
    e.preventDefault();
    
    if(!email){
      setIsValidated({ status: "blankData", message: "Please write your email" });
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
      lg:py-[85px] lg:px-[125px]">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 py-3">
            <h3 className="text-[1.2rem] md:text-[1.6rem]">Subscribe to our Newsletter & Never miss important updates</h3>
            
            {status === 'sending' && 
              <div className="left-50 border px-4 rounded-lg relative bottom-[-50px] py-6 text-center" 
                role="alert"
              >
                <strong className="font-bold">sending...</strong>
              </div>
            }
            {isValidated.status === 'error' && 
              <div className="alert_red left-50 border px-4 rounded-lg relative bottom-[-65px] py-6 text-center" 
                  role="alert"
                >
                  <strong className="font-bold">{isValidated.message}</strong>
              </div>
            }
            {isValidated.status === 'success' &&  
              <div className="alert_green left-50 border px-4 rounded-lg relative bottom-[-50px] py-6 text-center" 
                  role="alert"
                >
                  <strong className="font-bold">{isValidated.message}</strong>
              </div>
            }
            {isValidated.status === 'blankData' &&
             <div className="alert_red left-50 border px-4 rounded-lg relative bottom-[-50px] py-6" 
                role="alert"
              >
                <strong className="font-bold">{isValidated.message}</strong>
              </div>
            }
            
          </div>
          <div className="w-full lg:w-1/2 py-3">
            <form onSubmit={handleSubmit}>
               <div className="flex flex-wrap">
                <div className="new-email-bx w-full mb-3 md:mb-0 
                  md:w-3/4"
                >
                  <input className=""
                    value={email} 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email Adress" 
                    />
                </div>
                <div className="md:pl-2 md:w-1/4 m-auto">
                  <button className="newsletter_button  flex justify-center m-auto text-center" type="submit"> <span>Submit</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;