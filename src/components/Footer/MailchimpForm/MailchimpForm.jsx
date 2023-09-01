import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from '../Newsletter/Newsletter';

const MailchimpForm = () => {
  const postURL = `${import.meta.env.VITE_APP_MAILCHIMP_URL}
    ?u=${import.meta.env.VITE_APP_MAILCHIMP_U}
    &id=${import.meta.env.VITE_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe 
        url={postURL}
        render={({ subscribe, status, message }) => (
          <Newsletter 
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </>
  );
}
export default MailchimpForm;