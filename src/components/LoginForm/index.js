import React from 'react';
// Styles
import { Wrapper } from './LoginForm.styles';
// Components
import Popup from '../Popup';

const LoginForm = ({ active, setActive, children }) => {
  return (
    <Popup active={active} setActive={setActive}>
      {children}
      <h1>Whatever</h1>
    </Popup>
  );
};

export default LoginForm;
