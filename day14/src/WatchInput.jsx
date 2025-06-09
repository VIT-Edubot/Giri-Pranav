// src/WatchInput.jsx
import { useState } from "react";
import useWatch from "./useWatch";

function WatchInput() {
  const [value, setValue] = useState("");
  const watched = useWatch(value);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Watch input change"
      />
      <p>Watched value: {watched}</p>
    </div>
  );
}

export default WatchInput;
