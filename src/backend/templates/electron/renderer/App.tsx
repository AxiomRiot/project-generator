import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<REPLACE />} />
      </Routes>
    </Router>
  );
}
