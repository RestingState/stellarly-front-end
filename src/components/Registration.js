import React, { useState } from "react";
// Components

// User API
import createUser from "../api/userAPI";

const data = {
  first_name: "S",
  last_name: "J",
  email: "qwerty@gmail.com",
  password: "12345",
  city_id: 1,
  username: "stevej",
};

const Registration = () => {
  const [user, setUser] = useState(data);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    setError(false);
    try {
      const response = await createUser(data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <button style={{ color: "#000" }} onClick={handleSubmit}>
        Text
      </button>
    </>
  );
};

export default Registration;
