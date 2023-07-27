import {
  Header as HeaderContainer,
  Heading,
  Subheading
} from './Header.styles';

const Header = ({ heading, subheading }) => {
  return (
    <HeaderContainer>
      <Heading>
        {heading}{' '}
        {subheading && (
          <Subheading>{subheading}</Subheading>
        )}
      </Heading>
    </HeaderContainer>
  )
};

export default Header;
