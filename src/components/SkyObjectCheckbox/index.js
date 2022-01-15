import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
// Styles
import { Wrapper } from "./SkyObjectCheckbox.styles";
import { CustomizedCheckbox } from "./SkyObjectCheckbox.MUI.styles";

const CheckBox = () => {
  return (
    <Wrapper>
      <FormControlLabel control={<CustomizedCheckbox />} label="Stars" />
      <FormControlLabel control={<CustomizedCheckbox />} label="Planets" />
      <FormControlLabel control={<CustomizedCheckbox />} label="Satellites" />
      <FormControlLabel control={<CustomizedCheckbox />} label="Moon/Sun" />
    </Wrapper>
  );
};

export default CheckBox;
