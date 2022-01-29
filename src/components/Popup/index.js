import React from 'react';
// Styles
import { Wrapper, Content } from './Popup.styles';

const ErrorPopup = ({ active, setActive, children }) => {
  return (
    <Wrapper active={active} onClick={() => setActive(false)}>
      <Content active={active} onClick={(e) => e.stopPropagation()}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default ErrorPopup;
