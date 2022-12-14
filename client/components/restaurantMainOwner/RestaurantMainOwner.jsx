import React, { useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchMealsOfRestaurant } from '@redux/slices/meals';
import { Container, Row, Col, Button } from 'reactstrap';
import MealCardOwner from '../admin/meals/mealCardOwner/MealCardOwner';
import ListOfOrders from '../owner/listOfOrders/ListOfOrders';

export default function RestaurantMainOwner(props) {
  const urlParams = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const mealStatus = useSelector((state) => state.meals.status);

  const allMeals = meals.map((meal) => {
    return (
      <Col sm="2" key={meal.meal_id} id={meal.meal_id}>
        <MealCardOwner {...meal} />
      </Col>
    );
  });

  const handleAddNewClick = () => {
    navigate(`/owner/meals/${urlParams.id}/new`);
  };

  useEffect(() => {
    dispatch(fetchMealsOfRestaurant(urlParams.id));
  }, [dispatch, urlParams]);

  return (
    mealStatus === 'succeeded' && (
      <div>
        <h1>Restaurant: {name}</h1>
        <Button onClick={handleAddNewClick} type="button" color="primary">
          Add new meal for this restaurant
        </Button>
        <div className="mealList">
          <Container fluid>
            <Row>{allMeals}</Row>
          </Container>
        </div>
        <ListOfOrders />
      </div>
    )
  );
}
