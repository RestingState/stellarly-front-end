import React from 'react';
// Styles
import { Wrapper, Content } from './Popup.styles';

const Popup = ({ active, setActive, top, controlledOnClose, children }) => {
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
        {children}
      </Content>
    </Wrapper>
  );
};

export default Popup;
