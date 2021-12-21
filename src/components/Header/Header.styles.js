import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #131313;
  padding: 0.8em 4em;
  z-index: 9999;

  @media (max-width: 35em) {
    padding: 0.8em 2em;
  }
`;

export const Logo = styled.span`
  background: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;

  @media (max-width: 35em) {
    font-size: 1.5rem;
  }
`;

export const SignUpBtn = styled.a`
  display: inline-block;
  color: #fff;
  padding: 0.5em 1.5em;
  border-radius: 30px;
  background: linear-gradient(to right top, red 10%, blue);
  cursor: pointer;
  transition: transform 0.5s ease;

  :hover {
    transform: translate(0, -2px);
    box-shadow: 10px -10px 25px 0 rgba(143, 64, 248, 0.5),
      -10px 10px 25px 0 rgba(39, 200, 255, 0.5);
  }

  @media (max-width: 35em) {
    padding: 0.3em 1.1em;
    border-radius: 20px;
  }
`;
