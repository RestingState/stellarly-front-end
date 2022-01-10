import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const NavPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin: 0.9rem;
  gap: 0.5rem;

  @media (max-width: 82em) {
    display: none;
  }
`;
