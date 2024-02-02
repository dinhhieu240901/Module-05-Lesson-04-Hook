import React from "react";
import useSharedCounter from "../hooks/useSharedCounter";

function Counter1({ unit }) {
  const [count, increase] = useSharedCounter(1);
  console.log(unit);

  if (unit == null) {
    console.log(unit);

    unit = 1;
  }
  return (
    <div>
      <h2>Counter {unit}:</h2>
      <p>Count: {count}</p>
      <button onClick={() => increase(count + unit)}>Increment</button>
    </div>
  );
}

export default Counter1;
