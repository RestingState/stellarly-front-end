import { FC } from 'react';
// Components
import Header from './Header';
import UserPersonalInfoSection from './UserPersonalInfoSection';
import NotificationCategoriesSection from './NotificationCategoriesSection';

const UserPage: FC = () => {
  return (
    <>
      <Header active={true} />
      <UserPersonalInfoSection />
      <NotificationCategoriesSection />
    </>
  );
};

export default UserPage;
