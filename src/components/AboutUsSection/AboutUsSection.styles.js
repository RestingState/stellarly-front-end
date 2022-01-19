import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2rem;
  background-color: #101010;
  color: white;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 30%;
  font-size: 2rem;

  ${(props) =>
    (props.position === "left" &&
      css`
        justify-content: left;
      `) ||
    (props.position === "right" &&
      css`
        justify-content: right;
      `)}
`;

export const AboutStellarlyContent = styled.div`
  display: flex;
  gap: 5rem;
  margin: 2rem auto 0 auto;
  max-width: 70%;
`;

export const Text = styled.div`
  font-size: 1.3rem;
`;

export const Image = styled.img`
  max-width: 20%;
`;

export const AboutTeamContent = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto 0 auto;
  max-width: 40%;
  font-size: 1.3rem;
  list-style-position: inside;
`;

export const TeamMember = styled.li`
  padding: 0.5em;
  text-align: center;
`;
