import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';

import ProjectGenerator from '../components/ProjectGenerator';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectGenerator />} />
      </Routes>
    </Router>
  );
}
