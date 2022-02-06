import React from 'react';
// Styles
import { Wrapper } from './ErrorPopup.styles';
// Components
import Popup from '../Popup';

const ErrorPopup = ({ active, setActive, message }) => {
  return (
    <Popup active={active} setActive={setActive}>
      <h1 style={{ color: 'black' }}>{message}</h1>
    </Popup>
  );
};

export default ErrorPopup;
