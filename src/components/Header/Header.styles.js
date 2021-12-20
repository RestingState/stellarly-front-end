import styled from "styled-components";

export const Wrapper = styled.div`
  height: 55px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  text-align: center;
`;

export const Logo = styled.span`
  /* background-color: #ff8177; */
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  /* background-size: 100%; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
`;

export const SignUpBtn = styled.button`
  background: #f77062;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-size: 1.7rem;
`;
