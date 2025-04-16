import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>No Favorites Added</h3>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h2>Your Favorites</h2>
      <Row className="mx-0 mt-3">
        {favorites.map((job) => (
          <Col xs={12} md={6} lg={4} key={job.id}>
            <div
              className="border p-3 mb-3"
              style={{ borderRadius: 4, border: '1px solid #00000033' }}
            >
              <h5>{job.title}</h5>
              <p>{job.company_name}</p>
              <Link to={`/company/${job.company_name}`} className="btn btn-primary">
                View Company
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Favorites;
