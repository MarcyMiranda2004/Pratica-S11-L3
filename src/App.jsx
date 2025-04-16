import { Routes, Route, Link } from 'react-router-dom';
import Favorites from './components/Favorites.jsx';
import MainSearch from './components/MainSearch.jsx';
import CompanySearchResults from './components/CompanySearchResults.jsx';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">🚀 JobFinder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="main-content">
        <Container className="py-5">
          <Routes>
            <Route path="/" element={<MainSearch />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/company/:company" element={<CompanySearchResults />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
}

export default App;
