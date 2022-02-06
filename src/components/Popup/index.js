import React from 'react';
// Styles
import { Wrapper, Content } from './Popup.styles';

const Popup = ({ active, setActive, top, children }) => {
  return (
    <Wrapper active={active} top={top} onClick={() => setActive(false)}>
      <Content active={active} onClick={(e) => e.stopPropagation()}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Popup;
