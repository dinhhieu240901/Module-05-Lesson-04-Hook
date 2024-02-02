import React from "react";
import { useState } from "react";

function Car() {
  const cars = ["Mercedes", "Rolls-Royce", "Porsche"];
  const colors = ["Red", "Yellow", "Blue"];
  let [car, selectCar] = useState(cars[0]);
  let [color, selectColor] = useState(colors[0]);

  const changeCar = (event) => {
    selectCar(event.target.value);
  };
  const changeColor = (event) => {
    selectColor(event.target.value);
  };
  return (
    <div>
      <label>Select A Car</label>
      <select onChange={changeCar}>
        {cars.map((car, item) => (
          <option key={item} value={car}>
            {car}
          </option>
        ))}
      </select>
      <select onChange={changeColor}>
        {colors.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>
        {car} is a beautiful {color}.
      </p>
    </div>
  );
}

export default Car;
