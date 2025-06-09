// src/App.jsx
import NameForm from "./NameForm";
import WatchEffect from "./WatchEffect";
import WatchInput from "./WatchInput";
import FocusInput from "./FocusInput";
import React from "react";
import "./App.css";
function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Name Form (useRef)</h2>
      <NameForm />

      <h2>Watch Effect (useEffect)</h2>
      <WatchEffect />

      <h2>Watch Input (useWatch Hook)</h2>
      <WatchInput />

      <h2>Focus Input (useRef)</h2>
      <FocusInput />
    </div>
  );
}

export default App;
