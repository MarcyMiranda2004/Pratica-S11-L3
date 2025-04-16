import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavourite = favorites.some((job) => job.id === data.id);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: data.id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: data });
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <i
          className={`bi ${isFavourite ? 'bi-heart-fill text-danger' : 'bi-heart text-black'} me-3`}
          title={isFavourite ? 'remove from favourites' : 'add to favourites'}
          style={{ cursor: 'pointer' }}
          onClick={toggleFavourite}
        ></i>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
