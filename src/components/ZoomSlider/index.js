import React from "react";
import { useActions } from "../../hooks/useAction";
// Styles
import { CustomizedSlider } from "./ZoomSlider.MUI.styles";

const ZoomSlider = () => {
  const { setZoom } = useActions();

  const handleChange = (e, value) => {
    setZoom(value);
  };

  return <CustomizedSlider min={1} max={5} step={1} onChange={handleChange} />;
};

export default ZoomSlider;
