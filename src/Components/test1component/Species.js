import React from "react";

function Specise({ onChange }) {
  return (
    <div className="boxtype1">
      <label>동물종</label>
      <br></br>
      <input name="race" type="radio" value="cat" onChange={onChange}></input>
      Cat
      <input name="race" type="radio" value="dog" onChange={onChange}></input>
      Dog
    </div>
  );
}

export default Specise;
