import React from "react";
import { useState } from "react";

function Boxtype1({ name, value, onChange }) {
  return (
    <div className="boxtype1">
      <label>{name}</label>
      <br></br>
      <input type="text" name={name} onChange={onChange}></input>
    </div>
  );
}

export default Boxtype1;
