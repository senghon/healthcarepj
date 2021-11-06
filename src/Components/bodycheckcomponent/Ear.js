import React from "react";
import Eentcheckbox from "./eentcheckbox";

function Ear({ name }) {
  return (
    <div>
      <label>{name}</label>
      <input name={name} type="checkbox" value="normal" checked></input>normal
      <input name={name} type="checkbox" value="inflammation"></input>
      inflammation
      <input name={name} type="checkbox" value="discharge"></input>discharge
      <input name={name} type="checkbox" value="edema"></input>edema
      <input name={name} type="checkbox" value="lichenification"></input>
      lichenification
      <input name={name} type="checkbox" value="mass"></input>masss
    </div>
  );
}
export default Ear;
