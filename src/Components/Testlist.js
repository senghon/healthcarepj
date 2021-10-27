import React from "react";

function Testlist({ day }) {
  return (
    <div className="testBox" id="todayTestbox">
      <span>{day}</span>
      <div className="testTitle"></div>
      <div className="testList" id="todayList"></div>
    </div>
  );
}

export default Testlist;
