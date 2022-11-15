import styled from 'styled-components';

interface PositionProps {
  orientation: string;
}

export const StyledCardList = styled.ul<PositionProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  ${({ orientation }) =>
    orientation === 'row' &&
    `flex-direction: row
  `}
`;

export const StyledItem = styled.li<PositionProps>`
  width: 100%;
  ${({ orientation }) =>
    orientation === 'column' &&
    `
    @media (min-width: 765px) {
        width: 32%;
      }
  `}
`;
