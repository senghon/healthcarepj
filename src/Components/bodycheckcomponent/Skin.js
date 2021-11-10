import React from "react";
import Checkbox from "./Checkbox";

function Skin({ name }) {
  return (
    <div>
      <label>{name}</label>
      <br></br>
      <Checkbox name="normal" value="normal" checked="ture" />
      <Checkbox name="inflammation" value="inflammation" />
      <Checkbox name="discharge" value="discharge" />
      <Checkbox name="edema" value="edema" />
      <Checkbox name="lichenification" value="lichenification" />
      <Checkbox name="mass" value="mass" />
    </div>
  );
}
export default Skin;
