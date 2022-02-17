import styled from 'styled-components';

interface TitleProps {
  position?: string;
}

export const Wrapper = styled.div`
  padding: 2rem 0;
  background-color: #080808;
  color: white;
`;

const Title = styled.div<TitleProps>`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  font-size: var(--fontBig);

  @media (max-width: 60rem) {
    padding-top: 2rem;
    font-size: var(--fontMed);
  }
`;

export const AboutStellarlyTitle = styled(Title)`
  span {
    margin-right: 5rem;
  }

  @media (max-width: 60rem) {
    span {
      margin-right: 0;
    }
  }
`;

export const AboutTeamTitle = styled(Title)``;

export const ResourcesTitle = styled(Title)`
  span {
    margin-left: 10rem;
  }

  @media (max-width: 60rem) {
    span {
      margin-left: 0;
    }
  }
`;

export const AboutStellarlyContent = styled.div`
  display: flex;
  gap: 5rem;
  margin: 2rem auto 2rem auto;
  max-width: 70%;

  @media (max-width: 60rem) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 1rem auto 1rem auto;
    max-width: 100%;
    padding: 0 2rem;
  }
`;

export const Text = styled.div`
  font-size: var(--fontMedSmall);
  text-align: justify;

  @media (max-width: 60rem) {
    font-size: var(--fontSmall);
  }
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
  font-size: var(--fontMedSmall);
  list-style-position: inside;

  @media (max-width: 60rem) {
    margin: 1rem auto 2rem auto;
    max-width: 60%;
  }
`;

export const TeamMember = styled.li`
  padding: 0.5em;
  text-align: center;

  @media (max-width: 60rem) {
    font-size: var(--fontSmall);
  }
`;

export const ResourcesContent = styled.div`
  margin: 2rem auto 0 auto;
  max-width: 70%;

  @media (max-width: 60em) {
    margin: 1rem auto 1rem auto;
    max-width: 100%;
    padding: 0 2rem;
  }
`;
