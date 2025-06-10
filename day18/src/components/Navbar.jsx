import { useRouter } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

export default function Navbar() {
  const { state } = useRouter();
  const path = state.location.pathname;

  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-4 shadow-md rounded-b-xl">
      {path !== '/' && <Link className="hover:text-blue-400" to="/">Home</Link>}
      {path !== '/data' && (
        <Link className="hover:text-blue-400" to="/data">View Posts</Link>
      )}
    </nav>
  );
}
