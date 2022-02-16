import { FC } from 'react';
// Components
import Header from './Header';
import ContactUsSection from './ContactUsSection';

const ContactUs: FC = () => {
  return (
    <div>
      <Header active={true} />
      <ContactUsSection />
    </div>
  );
};

export default ContactUs;
