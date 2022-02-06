import React, { useState } from 'react';
// Components
import Header from './Header';
import RegistrationSection from './RegistrationSection';
// User API
import { createUser, loginUser, getUserInfo } from '../api/userAPI';

const registerData = {
  first_name: 'S',
  last_name: 'J',
  email: 'qwerty@gmail.com',
  password: '12345',
  city_id: 1,
  username: 'stevej'
};

const loginData = {
  username: 'stevej',
  password: '12345'
};

const Registration = () => {
  const [userData, setUserData] = useState({
    fname: '',
    sname: '',
    username: '',
    email: '',
    password: '',
    city_id: ''
  });

  // const handleRegisterSubmit = async () => {
  //   try {
  //     const response = await createUser(registerData);
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleLoginSumbit = async () => {
  //   try {
  //     const response = await loginUser(loginData);
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleGetUserInfo = async () => {
  //   try {
  //     const response = await getUserInfo();
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <>
      <Header active={true} />
      <RegistrationSection userData={userData} setUserData={setUserData} />
      {/* <button style={{ color: '#000' }} onClick={handleRegisterSubmit}>
        Registration
      </button>
      <button style={{ color: '#000' }} onClick={handleLoginSumbit}>
        Login
      </button> */}
      {/* <button style={{ color: '#000' }} onClick={handleGetUserInfo}>
        getUserInfo
      </button> */}
    </>
  );
};

export default Registration;
