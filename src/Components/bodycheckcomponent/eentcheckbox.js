import React from "react";

function Eentcheckbox({ name }, { value }) {
  return (
    <div>
      <input name={name} type="checkbox" value={value}></input>
      {value}
    </div>
  );
}
export default Eentcheckbox;
