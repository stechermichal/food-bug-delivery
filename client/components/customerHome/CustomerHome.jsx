import { useDispatch } from 'react-redux';
import { fetchRestaurants } from '../../Redux/slices/restaurants';
import { useEffect } from 'react';
import PreviewOfRestaurants from '../previewOfRestaurants/PreviewOfRestaurants';

const CustomerHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to our Food Panda Application</h1>
      <PreviewOfRestaurants />
    </div>
  );
};

export default CustomerHome;
