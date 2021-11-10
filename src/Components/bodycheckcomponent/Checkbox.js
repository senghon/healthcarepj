import React from "react";

function Checkbox({ name, value, checked }) {
  return (
    <>
      {name}
      <input
        name={name}
        type="checkbox"
        value={value}
        checked={checked}
      ></input>
    </>
  );
}
export default Checkbox;
