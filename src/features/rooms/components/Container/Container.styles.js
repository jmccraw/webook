import styled from 'styled-components/macro';

export const Container = styled.article`
  position: relative;
`;

export const FlexContainer = styled(Container)`
  display: flex;
`;

export const CardContainer = styled(FlexContainer)`
  flex-flow: row wrap;
  gap: var(--vertical-gap) var(--horizontal-gap);
  max-width: calc((var(--max-card-width) + var(--horizontal-gap)) * 4);
`;
