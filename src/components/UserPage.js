import React, { useState } from "react";
// Components

// User API
import fetchWeather from "../api/weatherAPI";

const UserPage = () => {
  const [token, setToken] = useState(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTk4MDUyNywianRpIjoiZTY5Zjc0M2QtNmFhNC00OGFhLTk5MmUtN2NjOWZjNWUxYzNkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InN0ZXZlaiIsIm5iZiI6MTY0MTk4MDUyNywiZXhwIjoxNjQxOTg0MTI3fQ.mpuQAcZfGu0b-Wf38_FtUy2rdTXkRJ8m_QLHSQTRlyw"
  );

  const handleWeatherSubmit = async () => {
    try {
      const response = await fetchWeather(token);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <button style={{ color: "#000" }} onClick={handleWeatherSubmit}>
        Weather
      </button>
    </>
  );
};

export default UserPage;
