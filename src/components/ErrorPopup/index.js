import React from 'react';
// Styles
import { Wrapper, Content } from './ErrorPopup.styles';

const ErrorPopup = ({ active, setActive, children }) => {
  return (
    <Wrapper active={active} onClick={() => setActive(false)}>
      <Content active={active} onClick={(e) => e.stopPropagation()}>
        <h1 style={{ color: 'black' }}>
          Internal server error. Some data might not be displayed
        </h1>
      </Content>
    </Wrapper>
  );
};

export default ErrorPopup;
