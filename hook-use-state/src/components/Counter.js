import React from "react";

function Counter() {
  //Xây dựng component Counter. Sử dụng hooks useState để tăng giá trị của biến count sau mỗi lần nhấn button
  const [count, setCount] = React.useState(0);
  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      Count: {count}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
