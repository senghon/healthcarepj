import React from "react";

function Skin({ name }) {
  return (
    <div>
      <label>{name}</label>
      <input name={name} type="checkbox" value="normal" checked></input>normal
      <input name={name} type="checkbox" value="cast"></input>cast
      <input name={name} type="checkbox" value="epidermalcollarette"></input>
      epidermalcollarette
      <input name={name} type="checkbox" value="papule"></input>papule
      <input name={name} type="checkbox" value="mass"></input>mass
    </div>
  );
}
export default Skin;
