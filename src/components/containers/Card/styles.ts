import styled from 'styled-components';

interface PositionProps {
  orientation: string;
}

export const StyledCard = styled.section<PositionProps>`
  display: flex;
  flex-direction: ${({ orientation }) => (orientation === 'column' ? 'column' : 'row')};
  flex-wrap: wrap;
  padding: 0.5rem;
  margin-top: 2rem;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const StyledImage = styled.img<PositionProps>`
  width: 100%;
  ${({ orientation }) =>
    orientation === 'row' &&
    `
    @media (min-width: 765px) {
        width: 35%;
        objectFit: cover;
        objectPosition: top;
      }
  `}
`;

export const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > p:first-of-type {
    font-size: 1.2rem;
    text-transform: lowercase;
    font-style: italic;
    font-weight: 800;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
  > h4 {
    font-size: 1.5rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors.grafiti};
  }
  > p:last-of-type {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.grafiti};
  }
  > div {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
