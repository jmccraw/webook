import Header from './components/Header';
import Container from './components/Container';
import Card from './components/Card';

import useFetchRooms from './hooks/useFetchRooms';

const HEADING = 'Rooms';
const SUBHEADING = 'Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.';

const Rooms = () => {
  const { hasError, isLoading, rooms } = useFetchRooms();

  return (
    <Container type="container" asElement="main">
      <Header
        heading={HEADING}
        subheading={SUBHEADING}
      />
      <Container type="cardContainer">
        {/* TODO FIXME Need to have an error component */}
        {hasError && !isLoading && <p>Something happened</p>}

        {/* TODO FIXME Need to include a loading throbber */}
        {isLoading && <p>Some Throbber</p>}

        {!hasError && !isLoading && rooms.length && (
          rooms.map(({ name, spots, thumbnail }) => (
            <Card
              key={`${name}-${spots}`}
              name={name}
              spots={spots}
              thumbnail={thumbnail}
            />
          ))
        )}
      </Container>
    </Container>
  )
};

export default Rooms;
