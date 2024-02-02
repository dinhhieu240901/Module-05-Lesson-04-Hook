import React from "react";
import { useState } from "react";

function useSharedCounter() {
  const [count, setCount] = useState(0);

  function increase(result) {
    setCount(result);
  }

  return [count, increase];
}

export default useSharedCounter;
