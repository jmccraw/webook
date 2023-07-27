import styled from 'styled-components/macro';

export const Header = styled.header`
  margin-bottom: 55px;
  max-width: var(--max-header-width);
  position: relative;
`;

export const Heading = styled.h1`
  color: var(--black);
  font: 400 var(--header-font-size)/1 var(--default-font);
`;

export const Subheading = styled.span`
  color: var(--grey);
  display: block;
  font: 400 var(--subheader-font-size)/1.4 var(--default-font);
  margin-top: 5px;
`;
