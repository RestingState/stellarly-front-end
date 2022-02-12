import styled, { css } from 'styled-components';

interface TitleProps {
  position?: string;
}

export const Wrapper = styled.div`
  padding: 2rem 0;
  background-color: #080808;
  color: white;
`;

export const Title = styled.div<TitleProps>`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 30%;
  font-size: 2rem;

  ${(props) =>
    props.position === 'left' &&
    css`
      justify-content: left;
    `}
`;

export const AboutStellarlyContent = styled.div`
  display: flex;
  gap: 5rem;
  margin: 2rem auto 2rem auto;
  max-width: 70%;
`;

export const Text = styled.div`
  font-size: 1.3rem;
  text-align: justify;
`;

export const Image = styled.img`
  max-width: 15rem;
  max-height: 15rem;
`;

export const AboutTeamContent = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto 4rem auto;
  max-width: 40%;
  font-size: 1.3rem;
  list-style-position: inside;
`;

export const TeamMember = styled.li`
  padding: 0.5em;
  text-align: center;
`;
