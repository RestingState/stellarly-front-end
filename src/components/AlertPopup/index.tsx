import { FC } from 'react';
// Styles
import { Wrapper } from './AlertPopup.styles';
// Components
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
// Types
import type { Color } from '@material-ui/lab/Alert';

interface AlertProps {
  active: boolean;
  setActive: (bool: boolean) => void;
  title: string;
  message: string;
  severity?: Color;
}

const AlertPopup: FC<AlertProps> = ({
  active,
  setActive,
  title,
  message,
  severity
}) => {
  const closeAlert = () => {
    setActive(false);
  };

  return (
    <Wrapper active={active}>
      <Alert severity={severity} onClose={closeAlert}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Wrapper>
  );
};

export default AlertPopup;
