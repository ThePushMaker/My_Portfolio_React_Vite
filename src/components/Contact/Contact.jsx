import '../../components/Contact/Contact.css'
import { useState } from 'react';
import contactImg from '../../assets/img/contact-img.png'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [ t] = useTranslation("global"); 
  const formInitialDetails = {
    fullName: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('SEND');
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
      
      setButtonText("SEND")
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
    <section className='bgBannerContacto'>
      <div className='contact degradado4 px-6 md:px-14 lg:px-28 pt-[60px] pb-[200px] ' id="contact">
        <div className='container mx-auto w-full h-full'>
          <div className='flex flex-wrap items-center'>
            <div className='w-full md:w-1/2'>
              <img src={contactImg} alt="contact_image" />
            </div>
            <div className='w-full md:w-1/2 mt-10 md:mt-0'>
              <h2 className='text-[40px] mb-5'>{t(`contact.header`)}</h2>
              <p className='mb-5 text-center'> {t(`contact.subtitle`)}</p>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-wrap'>
                  <div className='w-full'>
                    <input 
                      className='bg-[white] bg-opacity-[4%]'
                      type="text" 
                      value={formDetails.fullName} 
                      placeholder={t(`contact.placeholder_name`)}
                      onChange={(e) => onFormUpdate('fullName', e.target.value)} 
                      />
                  </div>
                  <div className='w-full'>
                    <input 
                      className='bg-[white] bg-opacity-[4%]'
                      type="email" 
                      value={formDetails.email} 
                      placeholder={t(`contact.placeholder_email`)}
                      onChange={(e) => onFormUpdate('email', e.target.value)} 
                    />
                  </div>
                  <div className='w-full'>
                    <textarea 
                      className='bg-[white] bg-opacity-[4%]'
                      value={formDetails.message} 
                      placeholder= {t(`contact.placeholder_message`)}
                      onChange={(e) => onFormUpdate('message', e.target.value)} 
                    ></textarea>
                  </div>
                  <div className='w-full'>
                    <div 
                      className='mx-auto my-4 w-fit flex justify-center 
                      
                      ' 
                      >
                      <button type="submit" className='button_transparent_rounded border-[1.5px] 
                      border-solid border-white bg-[black] bg-opacity-[30%]'>
                        <span> {t(`contact.submit`)} <span className='styledFontFamily' >{'>'}</span></span>
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
      </div>
    </section>
  );
}

export default Contact;