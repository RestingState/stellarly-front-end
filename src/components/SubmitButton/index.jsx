import React from 'react';
// Styles
import { CustomizedIconButton } from './SubmitButton.MUI.styles';
// Components
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const SubmitButton = ({ type, handleSubmit }) => {
  return (
    <CustomizedIconButton type={type} onClick={handleSubmit}>
      <CheckBoxIcon fontSize="large" />
    </CustomizedIconButton>
  );
};

export default SubmitButton;
