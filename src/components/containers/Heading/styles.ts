import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.black};
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  > p:first-of-type {
    font-weight: 900;
    font-style: italic;
    color: ${(props) => props.theme.colors.primary};
  }
  > h1 {
    font-size: 3.5rem;
    font-weight: 900;
  }
  > p:last-of-type {
    width: 80%;
    @media (min-width: 765px) {
      width: 70%;
    }
    line-height: 1.5;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: top;
`;
