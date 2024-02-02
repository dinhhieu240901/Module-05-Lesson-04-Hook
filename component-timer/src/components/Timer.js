import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
        alert("Time’s up");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <h1>Timer: {count}</h1>
    </div>
  );
};

export default Timer;
