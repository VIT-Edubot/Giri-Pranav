// src/WatchEffect.jsx
import { useEffect, useState } from "react";

function WatchEffect() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Input value changed to:", inputValue);
  }, [inputValue]);

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to watch"
      />
    </div>
  );
}

export default WatchEffect;
