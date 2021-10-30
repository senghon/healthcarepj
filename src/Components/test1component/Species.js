import React from "react";

function Specise() {
  return (
    <div className="boxtype1">
      <label>동물종</label>
      <br></br>
      <input name="cat-radio" type="radio" value="cat"></input>
      <input name="dog-radio" type="radio" value="dog"></input>
    </div>
  );
}

export default Specise;
