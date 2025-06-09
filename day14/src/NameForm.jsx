// src/NameForm.jsx
import { useRef } from "react";

function NameForm() {
  const nameInputRef = useRef();
  const initialName = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    initialName.current = nameInputRef.current.value;
    alert(`Initial name stored: ${initialName.current}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameInputRef} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
