import {
  CardContainer,
  Container as ContainerComponent,
  FlexContainer,
} from './Container.styles';

const TYPES = {
  'container': ContainerComponent,
  'cardContainer': CardContainer,
  'flexContainer': FlexContainer,
};

const Container = ({ asElement, type = 'container', children }) => {
  const SelectedContainer = TYPES[type];

  return (
    <SelectedContainer as={asElement}>
      {children}
    </SelectedContainer>
  );
};

export default Container;
