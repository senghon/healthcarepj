import React from "react";
import Navigation from "../Components/Navigation";
import Boxtype1 from "../Components/test1component/Boxtype1";
import Race from "../Components/test1component/Race";
import Sex from "../Components/test1component/Sex";
import Specise from "../Components/test1component/Species";
import Testoption from "../Components/test1component/Testoption";
import "../css/Test1.css";

function Test1() {
  return (
    <div>
      <form className="test1form">
        <div className="test1row">
          <Boxtype1 name="차트번호" value="hospitalname" />
          <Boxtype1 name="동물이름" value="animalname" />
          <Boxtype1 name="보호자" value="companion" />
          <Boxtype1 name="수의사" value="vet" />
        </div>
        <div className="test1row">
          <Specise />
          <Race />
          <Sex />
          <Boxtype1 name="나이" value="age" />
        </div>
        <div className="test1row">
          <Testoption />
          <input type="submit" value="다음"></input>
        </div>
      </form>
    </div>
  );
}

export default Test1;
