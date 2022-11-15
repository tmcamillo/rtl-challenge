import styled from 'styled-components';

export const StyledCta = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.85rem;
  text-decoration: underline;
  text-transform: lowercase;
  font-weight: 800;
  &:hover {
    filter: brightness(0.85);
  }
`;
