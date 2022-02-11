import { FC, ReactNode } from 'react';
// Styles
import { Wrapper, Content, Message } from './Popup.styles';

interface PopupProps {
  active: boolean;
  setActive: (bool: boolean) => void;
  top?: boolean;
  controlledOnClose?: boolean;
  message?: string;
  children?: ReactNode;
}

const Popup: FC<PopupProps> = (props) => {
  return (
    <Wrapper
      active={props.active}
      top={props.top}
      controlledOnClose={props.controlledOnClose}
      onClick={() => props.setActive(false)}
    >
      <Content
        active={props.active}
        controlledOnClose={props.controlledOnClose}
        onClick={(e) => e.stopPropagation()}
      >
        {props.message && <Message>{props.message}</Message>}
        {props.children}
      </Content>
    </Wrapper>
  );
};

export default Popup;
