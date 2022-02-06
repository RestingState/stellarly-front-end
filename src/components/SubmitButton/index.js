import React from 'react';
// Styles
import { CustomizedIconButton } from './SubmitButton.MUI.styles';
// Components
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <CustomizedIconButton onClick={handleSubmit}>
      <CheckBoxIcon fontSize="large" />
    </CustomizedIconButton>
  );
};

export default SubmitButton;
