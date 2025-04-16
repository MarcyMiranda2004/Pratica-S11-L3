import { Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites.jsx';
import Job from './components/Job';
import CompanySearchResults from './components/CompanySearchResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Job />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/company/:company" element={<CompanySearchResults />} />
    </Routes>
  );
}

export default App;
