import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Selector() {
  let [selected, setSelected] = useState("0");
  let [valueSelected, setValueSelected] = useState("");
  const choice = (e) => {
    setSelected(e.target.value);
  };
  //Sử dụng useEffect để lưu giá trị được lựa chọn
  useEffect(() => {
    switch (selected) {
      case "1":
        setValueSelected("Việt Nam");
        break;
      case "2":
        setValueSelected("Thế Giới");
        break;
      case "3":
        setValueSelected("Chính Trị Xã");
        break;
        defalut: console.log("Lỗi!");
    }
  }, [selected]);
  return (
    <div>
      Lựa chọn
      <select onChange={choice} value={selected}>
        <option value="0">-- Chọn --</option>
        <option value="1">Việt Nam</option>
        <option value="2">Thế Giới</option>
        <option value="3">Chính Trị Xã</option>
      </select>
      <h2>Your selected: {valueSelected}</h2>
    </div>
  );
}

export default Selector;
