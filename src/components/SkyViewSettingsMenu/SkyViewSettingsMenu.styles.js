import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: -500px;
  height: 90%;
  width: 300px;
  margin: 30px 0 0 10px;
  padding: 30px 10px 0 10px;
  background-image: linear-gradient(to right top, #103666, #809bbd);
  z-index: 100;
  border-radius: 30px;
  transition: left 0.8s ease;

  ${(props) =>
    props.active &&
    css`
      left: 0px;
    `}
`;

export const Content = styled.div`
  margin: 20px 0 0 0;
  h1 {
    text-align: center;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  left: 85%;
  bottom: 92%;
  text-align: right;
  width: fit-content;
  cursor: pointer;

  .bar {
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background: var(--white);
  }

  .bar:nth-child(1) {
    transform: translateY(4px) rotate(45deg);
  }

  .bar:nth-child(2) {
    transform: translateY(-4px) rotate(-45deg);
  }
`;
