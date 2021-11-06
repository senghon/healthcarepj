import React from "react";
import Eentcheckbox from "./eentcheckbox";

function Eye({ name }) {
  return (
    <div>
      <label>eye</label>
      <input name={name} type="checkbox" value="normal" checked></input>normal
      <input name={name} type="checkbox" value="redness"></input>Redness
      <input name={name} type="checkbox" value="edema"></input>Edema
      <input name={name} type="checkbox" value="catastract"></input>Catastract
      <input name={name} type="checkbox" value="mass"></input>mass
    </div>
  );
}
export default Eye;
