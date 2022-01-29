import React, { useEffect, useState } from 'react';
// Components
import Header from './Header';
import UserPersonalInfoSection from './UserPersonalInfoSection';
// API
// import { getUserInfo } from '../api/userAPI';
// import fetchWeather from '../api/weatherAPI';

const UserPage = () => {
  // const [token, setToken] = useState(
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTk4MzE2OSwianRpIjoiNzY3YzU0ZDEtZjQ2OC00MzQ3LTlmMjgtM2ZiYTZmYzllNzdlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InN0ZXZlaiIsIm5iZiI6MTY0MTk4MzE2OSwiZXhwIjoxNjQxOTg2NzY5fQ.MFzfuBYD8Iwe3mipxD9lOHJ2WocYU02X7IMNs847Vng'
  // );

  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       const response = await getUserInfo(token);
  //       console.log(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getUserData();
  // }, []);

  // const handleWeatherSubmit = async () => {
  //   try {
  //     const response = await fetchWeather(token);
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <>
      <Header active={true} />
      <UserPersonalInfoSection />
      {/* <button style={{ color: '#000' }} onClick={handleWeatherSubmit}>
        Weather
      </button> */}
    </>
  );
};

export default UserPage;
