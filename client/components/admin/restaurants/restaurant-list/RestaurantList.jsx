import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteRestaurant } from '@redux/slices/restaurants';
import { useNavigate } from 'react-router-dom';
import styles from './restaurantsList.module.scss';

const RestaurantList = ({ restaurants }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePreviewClick = (e, item) => {
    if (e.target.tagName === 'TD') {
      navigate(`/owner/restaurant/${item.id}/?name=${item.name}`);
    }
  };

  const handleAddNewClick = (id) => {
    navigate(`/owner/meals/${id}/new`);
  };

  const handleEditClick = (id) => {
    navigate(`/owner/restaurant/${id}/edit`);
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteRestaurant(id));
    } catch (error) {
      console.error('Failed to delete restaurant: ', error);
    }
  };

  return (
    <tbody className="restaurant-list">
      {restaurants.map((item) => (
        <tr className={styles.rows} key={item.id} onClick={(e) => handlePreviewClick(e, item)}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.email}</td>
          <td>{item.phone_number}</td>
          <td>{item.description}</td>
          <td>{item.delivery_fee}</td>
          <td>
            <Button onClick={() => handleAddNewClick(item.id)} color="primary" outline>
              <p>
                Add new meal <i className="fas fa-plus" />
              </p>
            </Button>
            <Button onClick={() => handleEditClick(item.id)} color="info" outline>
              <p>
                Edit restaurant <i className="fas fa-pencil-alt" />
              </p>
            </Button>
            <Button onClick={() => handleDelete(item.id)} color="danger" outline>
              <p>
                Delete restaurant <i className="fas fa-trash-alt" />
              </p>
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RestaurantList;
