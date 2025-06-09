import { useState, useMemo, useCallback } from "react";
import { useTheme } from "./ThemeContext";
import "./styles.css";
import React from "react";
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

const UserItem = React.memo(({ user, onClick }) => {
  return <li onClick={() => onClick(user)}>{user.name}</li>;
});

export default function UserList() {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleClick = useCallback((user) => {
    alert(`You clicked on ${user.name}`);
  }, []);

  return (
    <div className={`container ${theme}`}>
      <h1>User Dashboard</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <input
        type="text"
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
}
