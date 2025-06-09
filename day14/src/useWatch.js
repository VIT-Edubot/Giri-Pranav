// src/useWatch.js
import { useEffect, useRef, useState } from "react";

function useWatch(value) {
  const [watchedValue, setWatchedValue] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    if (previousValue.current !== value) {
      setWatchedValue(value);
      previousValue.current = value;
    }
  }, [value]);

  return watchedValue;
}

export default useWatch;
