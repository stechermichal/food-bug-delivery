import { Container, Row, Col } from 'reactstrap';
import RestaurantCard from '../restaurantCard/RestaurantCard';
import { useSelector } from 'react-redux';

export default function PreviewOfRestaurants(props) {
  const { restaurants } = useSelector((state) => state.restaurants);

  const allRestaurants = restaurants.map((restaurant) => {
    return (
      <Col sm="2" key={restaurant.id}>
        <RestaurantCard {...restaurant} />
      </Col>
    );
  });
  return (
    <Container fluid>
      <Row>{allRestaurants}</Row>
    </Container>
  );
}
