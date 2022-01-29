import React from 'react';
// Styles
import { Wrapper } from './ErrorPopup.styles';
// Components
import Popup from '../Popup';

const ErrorPopup = ({ active, setActive, children }) => {
  return (
    <Popup active={active} setActive={setActive}>
      <h1 style={{ color: 'black' }}>
        Internal server error. Some data might not be displayed
      </h1>
    </Popup>
  );
};

export default ErrorPopup;
