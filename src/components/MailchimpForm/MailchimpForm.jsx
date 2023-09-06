import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from './Newsletter/Newsletter';

const MailchimpForm = () => {
  const postURL = `https://gmail.us21.list-manage.com/subscribe/post?u=3db304085fd3fc78def0a405d&id=c6f4155918`;

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