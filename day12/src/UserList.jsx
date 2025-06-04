import { useEffect, useState } from "react";
import "./styles.css";

const mockAPI = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(mockAPI);
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      }catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users. Please try again later.");
        setLoading(false);
}


    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      document.title = `Users Loaded: ${users.length}`;
    }, 5000);

    return () => clearInterval(timer); // Cleanup
  }, [users]);

  useEffect(() => {
    const results = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  return (
    <div className="user-container">
      <h2>Active Users</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p className="loading">Loading users...</p>
      ) : (
        <ul className="user-list">
          {filteredUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
