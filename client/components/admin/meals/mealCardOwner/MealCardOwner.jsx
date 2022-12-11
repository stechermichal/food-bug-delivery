import React from 'react';
import { deleteMeal } from '@redux/slices/meals';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './mealCardOwner.module.scss';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function MealCardOwner(props) {
  const navigate = useNavigate();
  const urlParams = useParams();
  const restaurantId = urlParams.id;

  const dispatch = useDispatch();

  const handleDelete = async (mealId) => {
    try {
      await dispatch(deleteMeal([mealId, restaurantId]));
    } catch (error) {
      console.error('Failed to delete a meal: ', error);
    }
  };

  const shortendName = props.meal_name.slice(0, 19) + ' ...';

  return (
    <div className={styles.card}>
      <Card>
        <img alt="Sample" src={`http://localhost:3001/meals/${props.img_url}`} height={240} />
        <CardBody>
          <CardTitle className={styles.cardTitle} tag="h5">
            {props.meal_name.length < 19 ? props.meal_name : shortendName}
          </CardTitle>
          <CardText>Here should be meal description like what it contain.</CardText>
          <CardText className={styles.cardDesc} tag="h6">
            {props.price}
          </CardText>
          <Button
            onClick={() => navigate(`/owner/meals/${props.meal_id}/${props.restaurant_id}/edit`)}
            color="info"
            outline
          >
            Edit <i className="fas fa-pencil-alt" />
          </Button>
          <Button onClick={() => handleDelete(props.meal_id)} color="danger" outline>
            Delete <i className="fas fa-trash-alt" />
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
