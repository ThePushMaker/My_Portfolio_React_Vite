import '../../components/Contact/Contact.css'
import { useState } from 'react';
import contactImg from '../../assets/img/contact-img.png'
import { useTranslation } from 'react-i18next';
import EmailDisplay from '../EmailDisplay/EmailDisplay';
import TransparentInput from '../UI/TransparentInput/TransparentInput';
import CustomHeader from '../UI/CustomHeader/CustomHeader';

const Contact = () => {
  const [ t] = useTranslation("global"); 
  
  const resetFormData = {
    fullName: '',
    email: '',
    message: ''
  }
  // pborrar
  // const [formData, setformData] = useState(resetFormData);
  const [formData, setFormData] = useState(resetFormData);
  const [buttonText, setButtonText] = useState('');
  const [status, setStatus] = useState({useState});
  
  const contactEmail = import.meta.env.REACT_APP_NODEMAILER_RECIPIENT;	
  
  const handleInputChange= (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // validate data
    if(!formData.fullName ||!formData.email || !formData.message){
      setStatus({ success: false, message: t(`contact.fill_out_all`) });
    } else {
      console.log(formData)
      setButtonText(t(`contact.sending`));
      let response = await fetch(import.meta.env.VITE_APP_NODEMAILER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      })
      
      setButtonText(t(`contact.submit`))
      let resonseJSON = await response.json();
      // setFormData(resetFormData);
      if (resonseJSON.code == 200){
        setStatus ({ success: true, message: t(`contact.message_sent`) });
      } else {
        console.log(resonseJSON)
        setStatus({ success: false, message: resonseJSON.code + ' ' + t(`contact.something_wrong`) });
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
              <CustomHeader
                align='center'
                emoji='🚀'
                text={t(`contact.header`)}
              />
              <p className='mb-5 text-center'> {t(`contact.subtitle`)}</p>
              
              <form onSubmit={handleSubmit}>
                <div className='flex flex-wrap'>
                  <TransparentInput
                    autoComplete='off'
                    name={"fullName"}
                    onChange={handleInputChange}
                    placeholder={t(`contact.placeholder_name`)}
                    type={"text"}
                    value={formData.fullName}
                  />
                  <TransparentInput
                    autoComplete='on'
                    name={"email"}
                    onChange={handleInputChange}
                    placeholder={t(`contact.placeholder_email`)}
                    type={"email"}
                    value={formData.email}
                  />
                  <div className='w-full'>
                    <textarea 
                      className='bg-[white] bg-opacity-[4%]'
                      placeholder= {t(`contact.placeholder_message`)}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className='w-full'>
                    <div 
                      className='mx-auto my-4 w-fit flex justify-center' 
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
              
              {/* copy email component */}
              <EmailDisplay email={contactEmail} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;