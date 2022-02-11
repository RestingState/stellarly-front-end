import { FC } from 'react';
// Components
import Header from './Header';
import RegistrationSection from './RegistrationSection';

const Registration: FC = () => {
  return (
    <>
      <Header active={true} />
      <RegistrationSection />
    </>
  );
};

export default Registration;
