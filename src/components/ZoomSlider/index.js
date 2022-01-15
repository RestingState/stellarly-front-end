import React, { useState } from "react";
// Styles
import { CustomizedSlider } from "./ZoomSlider.MUI.styles";

const ZoomSlider = () => {
  const handleChange = (e, value) => {
    console.log(value);
  };

  return <CustomizedSlider max={50} step={10} onChange={handleChange} />;
};

export default ZoomSlider;
