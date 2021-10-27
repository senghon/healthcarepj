import React from "react";
import Navigation from "../Components/Navigation";
import Testlist from "../Components/Testlist";
import "../css/Home.css";

function Home() {
  return (
    <div className="Home">
      {/* 네비게이션텝 */}
      <Navigation />
      {/* 네비게이션텝 끝 */}

      {/* 메인화면 */}
      <div className="mainpage">
        {/* 오늘의 검사 */}
        <Testlist day="Today" />
        {/* 오늘의 검사 끝 */}

        {/* 이전 검사 메뉴 */}
        <Testlist day="Past" />
        {/* 이전검사메뉴 끝 */}
      </div>
      {/* 메인화면끝 */}
    </div>
  );
}

export default Home;
