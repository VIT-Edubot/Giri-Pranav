import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
