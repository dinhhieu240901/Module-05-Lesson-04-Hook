import React from "react";
import useSharedCounter from "../hooks/useSharedCounter";

function Counter1() {
  const [count, increase] = useSharedCounter();

  return (
    <div>
      <h2>Counter 2</h2>
      <p>Count: {count}</p>
      <button onClick={() => increase(count + 2)}>Increment</button>
    </div>
  );
}

export default Counter1;
