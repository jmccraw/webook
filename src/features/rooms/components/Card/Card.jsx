import { useState } from 'react';

import {
  Button,
  Card as CardComponent,
  DetailsContainer,
  Figure,
  Header,
  Image,
  Subheading,
} from './Card.styles';
import Container from '../Container';

const Card = ({ name, spots, thumbnail }) => {
  const [seats, setSeats] = useState(spots);
  const isDisabled = seats === 0;

  const handleClick = () => {
    setSeats(0);
  };

  return (
    <CardComponent className={isDisabled ? 'is-disabled' : ''}>
      <Figure>
        <Image src={thumbnail} alt={`Photo of the room named ${name}`} loading="lazy" />
      </Figure>
      <DetailsContainer>
        <Container>
          <Header>{name}{' '}<Subheading>{spots} spots remaining</Subheading></Header>
        </Container>
        <Button
          type="button"
          disabled={isDisabled}
          onClick={handleClick}
          aria-label="Confirm your booking"
        >
          {isDisabled ? 'Booked' : 'Book!'}
        </Button>
      </DetailsContainer>
    </CardComponent>
  );
};

export default Card;