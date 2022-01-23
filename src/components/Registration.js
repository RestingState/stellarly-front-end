import React, { useState } from 'react';
// Components

// User API
import { createUser, loginUser } from '../api/userAPI';

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
  const handleRegisterSubmit = async () => {
    try {
      const response = await createUser(registerData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLoginSumbit = async () => {
    try {
      const response = await loginUser(loginData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <button style={{ color: '#000' }} onClick={handleRegisterSubmit}>
        Registration
      </button>
      <button style={{ color: '#000' }} onClick={handleLoginSumbit}>
        Login
      </button>
    </>
  );
};

export default Registration;
