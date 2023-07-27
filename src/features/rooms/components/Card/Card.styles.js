import styled from 'styled-components/macro';

import { FlexContainer } from '../Container/Container.styles';

export const Card = styled.article`
  flex-shrink: 0;
  max-width: var(--max-card-width);
  width: 100%;
`;

export const Figure = styled.figure`
  height: 100%;
  margin-bottom: 12px;
  max-height: var(--max-card-image-height);
  width: 100%;

  ${Card}.is-disabled & {
    filter: grayscale(1);
  }
`;

export const Image = styled.img`
  border-radius: var(--border-radius);
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const DetailsContainer = styled(FlexContainer)`
  justify-content: space-between;
`;

export const Header = styled.h2`
  color: var(--black);
  font: 700 var(--label-font-size)/1.33 var(--default-font);
  margin-top: 1px;
`;

export const Subheading = styled.span`
  color: var(--plum);
  display: block;
  font-weight: 400;
  margin-top: 6px;
  padding: 0;

  ${Card}.is-disabled & {
    color: var(--grey);
  }
`;

export const Button = styled.button`
  background-color: var(--plum);
  border: 1px solid var(--plum);
  border-radius: var(--small-border-radius);
  color: var(--white);
  cursor: pointer;
  font: 700 var(--button-font-size)/1 var(--default-font);
  height: var(--button-height);
  touch-action: manipulation;
  transition: background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  width: var(--button-width);

  &:hover {
    background-color: var(--white);
    color: var(--plum);
  }

  &:disabled {
    background-color: var(--grey);
    border-color: var(--gray);
    color: var(--white);
    pointer-events: none;
  }
`;
