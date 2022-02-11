import { FC } from 'react';
// Styles
import { CustomizedIconButton } from './SubmitButton.MUI.styles';
// Components
import CheckBoxIcon from '@mui/icons-material/CheckBox';

type ButtonTypes = 'button' | 'submit' | 'reset' | undefined;

interface SubmitButtonProps {
  type?: ButtonTypes;
}

const SubmitButton: FC<SubmitButtonProps> = ({ type = 'submit' }) => {
  return (
    <CustomizedIconButton type={type}>
      <CheckBoxIcon fontSize="large" />
    </CustomizedIconButton>
  );
};

export default SubmitButton;
