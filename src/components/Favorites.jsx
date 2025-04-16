import { useSelector } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
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
      <h2 className="mb-4">Your Favorite Jobs</h2>
      <Row>
        {favorites.map((job) => (
          <Col xs={12} md={6} lg={4} key={job.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
                <Button as={Link} to={`/company/${job.company_name}`} variant="primary">
                  View Company
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Favorites;
