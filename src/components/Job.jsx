import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Job.css';

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavourite = favorites.some((job) => job._id === data._id);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: data._id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: data });
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3 shadow-sm job-card bg-white rounded align-items-center"
      style={{ border: '1px solid #dee2e6' }}
    >
      <Col xs={3} className="d-flex flex-column align-items-start">
        <i
          className={`bi fs-4 heart-icon ${isFavourite ? 'bi-heart-fill text-danger' : 'bi-heart text-muted'}`}
          title={isFavourite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={toggleFavourite}
        ></i>
        <Link to={`/company/${data.company_name}`} className="fw-bold mt-2">
          {data.company_name}
        </Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer" className="text-decoration-none">
          <h5 className="mb-0">{data.title}</h5>
        </a>
      </Col>
    </Row>
  );
};

export default Job;
