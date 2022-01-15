import React from "react";
// Styles
import { CustomizedIconButton } from "./SubmitButton.MUI.styles";
// Components
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const SubmitButton = () => {
  return (
    <CustomizedIconButton>
      <CheckBoxIcon fontSize="large" />
    </CustomizedIconButton>
  );
};

export default SubmitButton;
