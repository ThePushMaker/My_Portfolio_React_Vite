import { useState, useEffect } from "react";

const Newletter = ({ onValidated, status, message }) => {
  const[email, setEmail] = useState('');
  
  useEffect(() => {
    if ( status === 'success' ) clearFields();
  }, [status])
  
  const handleSubmit = e => {
    e.preventDefault();
    email && 
    email.indexOf("@") > -1 &&
    onValidated({
      Email: email
    })
  }
  
  const clearFields = () => {
    setEmail('');
  }
  
  return(
    <div className="w-full">
      <div className="newsletter-bx">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <h3>Subscribe to our Newsletter & Never miss important updates</h3>
            {status === 'sending' && 
            <div className="bg-red-100 border border-white text-white px-4 py-3 rounded relative" 
              role="alert"
            >
              <strong className="font-bold">{message}</strong>
            </div>}
            {status === 'error' && 
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" 
              role="alert"
            >
              <strong className="font-bold">{message}</strong>
            </div>}
            {status === 'success' && 
            <div className="bg-red-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" 
              role="alert"
            >
              <strong className="font-bold">{message}</strong>
            </div>}
          </div>
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Adress" 
                />
                <button type="submit"> Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newletter;