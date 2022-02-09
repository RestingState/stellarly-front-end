// Styles
import { Wrapper, Content, Message } from './Popup.styles';

const Popup = (props) => {
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
