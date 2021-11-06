import React from "react";
import Eentcheckbox from "./eentcheckbox";

function Teeth({ name }) {
  return (
    <div>
      <label>{name}</label>
      <input name={name} type="checkbox" value="normal" checked></input>normal
      <input name={name} type="checkbox" value="calculus"></input>calculus
      <input name={name} type="checkbox" value="badbreath"></input>badbreath
      <input name={name} type="checkbox" value="periodontaldisease"></input>
      periodontaldisease
      <input name={name} type="checkbox" value="stomatitis"></input>stomatitis
      <input name={name} type="checkbox" value="milkteeth"></input>milkteeth
    </div>
  );
}
export default Teeth;
