import '../../components/Contact/Contact.css'
import { useState } from 'react';
import contactImg from '../../assets/img/contact-img.png'

const Contact = () => {
  const formInitialDetails = {
    fullName: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({useState});
  
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate data
    if(!formDetails.fullName ||!formDetails.email || !formDetails.message){
      setStatus({ success: false, message: "Please fill out all the fields" });
    } else {
      setButtonText("sending...");
      let response = await fetch(import.meta.env.VITE_APP_NODEMAILER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      })
      
      setButtonText("Send")
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code == 200){
        setStatus ({ success: true, message: "Message was sent successfully" });
      } else {
        setStatus({ success: false, message: "something went wrong, please try again later." });
      }
    }
  };
  
  return(
    <section className='contact px-6 md:px-14 lg:px-28 pt-[60px] pb-[200px] ' id="contact">
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center'>
          <div className='w-full md:w-1/2'>
            <div>
              <img src={contactImg} alt="contact_image" />
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <h2>Let{"'"}s Make it Happen!</h2>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-wrap'>
                <div className='w-full'>
                  <input 
                    type="text" 
                    value={formDetails.fullName} 
                    placeholder='Full Name' 
                    onChange={(e) => onFormUpdate('fullName', e.target.value)} 
                  />
                </div>
                <div className='w-full'>
                  <input 
                    type="email" 
                    value={formDetails.email} 
                    placeholder='Email Address' 
                    onChange={(e) => onFormUpdate('email', e.target.value)} 
                  />
                </div>
                <div className='w-full'>
                  <textarea 
                    value={formDetails.message} 
                    placeholder='Message' 
                    onChange={(e) => onFormUpdate('message', e.target.value)} 
                  ></textarea>
                </div>
                <div className='w-full'>
                  <div className='button_transparent_rounded flex justify-center'>
                    <button type="submit">
                    <span>{buttonText}</span>
                    </button>
                  </div>
                </div>
                <div className='w-full'>
                  {
                    <div className='w-full'>
                      <div className='flex justify-center pt-2'>
                        <p className={`${status.success === false ? 'danger' : 'success'} text-center`}>
                          {status.message}
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;