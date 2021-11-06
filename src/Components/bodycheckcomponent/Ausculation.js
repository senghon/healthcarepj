import React from "react";
import Eentcheckbox from "./eentcheckbox";

function Ausculation({ name }) {
  return (
    <div>
      <label>{name}</label>
      <input name={name} type="checkbox" value="normal" checked></input>normal
      <input name={name} type="checkbox" value="murmur"></input>murmur
      <input name={name} type="checkbox" value="hbabnormal"></input>hbabnormal
      <input name={name} type="checkbox" value="vesicularsound"></input>
      vesicularsound
      <input name={name} type="checkbox" value="mass"></input>mass
    </div>
  );
}
export default Ausculation;
