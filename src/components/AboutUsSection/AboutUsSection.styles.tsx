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
  padding-top: 3rem;
  font-size: 2rem;

  @media (max-width: 50rem) {
    padding-top: 2rem;
    font-size: 1.5rem;
  }
`;

export const AboutStellarlyTitle = styled(Title)`
  span {
    margin-right: 5rem;
  }
`;

export const AboutTeamTitle = styled(Title)``;

export const AboutStellarlyContent = styled.div`
  display: flex;
  gap: 5rem;
  margin: 2rem auto 2rem auto;
  max-width: 70%;

  @media (max-width: 60em) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 1rem auto 1rem auto;
    max-width: 100%;
    padding: 0 2rem;
  }
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
