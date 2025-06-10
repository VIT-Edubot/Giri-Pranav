import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link> |{' '}
        <Link to="/dashboard/101">Dashboard 101</Link> |{' '}
        <Link to="/dashboard/202">Dashboard 202</Link>
      </nav>
    </div>
  );
}

export default Home;
