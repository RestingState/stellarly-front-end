import React from 'react';
// Styles
import { Wrapper } from './ErrorPopup.styles';
// Components
import Popup from '../Popup';

const ErrorPopup = ({ active, setActive, message, top }) => {
  return (
    <Popup active={active} setActive={setActive} top={top}>
      <h1 style={{ color: 'black' }}>{message}</h1>
    </Popup>
  );
};

export default ErrorPopup;
