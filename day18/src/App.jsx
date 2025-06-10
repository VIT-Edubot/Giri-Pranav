import { Link } from '@tanstack/react-router';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-center p-8">
      <Navbar />
      <h1 className="text-4xl font-bold mt-10 text-gray-800">
        Welcome to <span className="text-blue-600">TanStack Query Demo</span>
      </h1>
      <p className="mt-4 text-gray-500">Explore posts using modern tools and routing!</p>
    </div>
  );
};

export default App;
