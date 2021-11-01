import React from "react";

function Testoption({ checkingbox }) {
  return (
    <div className="boxtype1">
      <label>추가검사옵션</label>
      <div>
        <input
          name="testOption"
          type="checkbox"
          onClick={checkingbox}
          value="Cpl"
        ></input>
        Cpl
        <input
          name="testOption"
          type="checkbox"
          onClick={checkingbox}
          value="Fpl"
        ></input>
        Fpl
        <input
          name="testOption"
          type="checkbox"
          onClick={checkingbox}
          value="SDMA"
        ></input>
        SDMA
        <input
          name="testOption"
          type="checkbox"
          onClick={checkingbox}
          value="T4"
        ></input>
        T4
        <input
          name="testOption"
          type="checkbox"
          onClick={checkingbox}
          value="CRP"
        ></input>
        CRP
        <input
          name="testOption"
          type="checkbox"
          onClick={checkingbox}
          value="proBNP"
        ></input>
        proBNP
      </div>
    </div>
  );
}

export default Testoption;
