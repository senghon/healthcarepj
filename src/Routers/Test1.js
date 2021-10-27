import React from "react";

function Test1() {
  return (
    //boxtype1.
    //
    <form>
      <div>
        <h1>동물병원명</h1>
        <input value="hospitalName"></input>
      </div>
      <div>
        <h1>차트번호</h1>
        <input value="chartNum"></input>
      </div>
      <div>
        <h1>동물이름</h1>
        <input value="animalName"></input>
      </div>
      <div>
        <h1>수의사</h1>
        <input value="veterinarian"></input>
      </div>
      <div>
        <h1>동물종,나이</h1>
        <input type="radio"></input>
        <input type="radio"></input>
        <input value="age"></input>
      </div>
      <div>
        <h1>성별</h1>
        <input type="radio" value="intactMale"></input>
        <input type="radio" value="castMale"></input>
        <input type="radio" value="castfemle"></input>
        <input type="radio" value="castfemle"></input>
      </div>
      <div>
        <h1></h1>
      </div>
      <div>
        <h1></h1>
        <input></input>
      </div>
    </form>
  );
}

export default Test1;
