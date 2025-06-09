import UserList from "./UserList";
import { ThemeProvider } from "./ThemeContext.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <UserList />
    </ThemeProvider>
  );
}
