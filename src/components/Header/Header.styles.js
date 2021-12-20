import styled from "styled-components";

export const Wrapper = styled.div`
  height: 55px;
  background: var(--darkGrey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  z-index: 999;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Logo = styled.span`
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
`;

export const SignUpBtn = styled.a`
  color: var(--white);
  padding: 8px 30px;
  border-radius: 30px;
  background: red;
  /* background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%); */
  background-image: linear-gradient(to right top, red 10%, blue);
  transition: transform 0.5s ease;

  :hover {
    transform: translate(0, -2px);
    box-shadow: 10px -10px 25px 0 rgba(143, 64, 248, 0.5),
      -10px 10px 25px 0 rgba(39, 200, 255, 0.5);
  }
`;
