import React from "react";

function Boxtype1({ name, value }) {
  return (
    <div className="boxtype1">
      <label>{name}</label>
      <br></br>
      <input type="text" name={name} value={value} onChange={onchange}></input>
    </div>
  );
}

export default Boxtype1;
