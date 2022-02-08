import React from 'react';
// Styles
import { Wrapper, Content, Message } from './Popup.styles';

const Popup = ({
  active,
  setActive,
  top,
  controlledOnClose,
  message,
  children
}) => {
  return (
    <Wrapper
      active={active}
      top={top}
      controlledOnClose={controlledOnClose}
      onClick={() => setActive(false)}
    >
      <Content
        active={active}
        controlledOnClose={controlledOnClose}
        onClick={(e) => e.stopPropagation()}
      >
        {message && <Message>{message}</Message>}
        {children}
      </Content>
    </Wrapper>
  );
};

export default Popup;
