import React from "react";

function Sex({ name, onChange }) {
  return (
    <div className="boxtype1">
      <label>성별</label>
      <br></br>
      <input name={name} type="radio" value="Female" onClick={onChange}></input>
      Female
      <input name={name} type="radio" value="NF" onClick={onChange}></input>
      NF
      <input name={name} type="radio" value="Male" onClick={onChange}></input>
      Male
      <input name={name} type="radio" value="NM" onClick={onChange}></input>
      NM
    </div>
  );
}

export default Sex;
