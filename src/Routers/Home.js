import React from "react";

function Home() {
  return (
    <>
      {/* 네비게이션텝 */}
      <div className="navigation">
        <nav>
          <li>Home</li>
          <li>start test</li>
          <li>profile</li>
        </nav>
      </div>
      {/* 네비게이션텝 끝 */}

      {/* 메인화면 */}
      <div className="mainpage">
        {/* 오늘의 검사 */}
        <div className="todaytest">
          <div className="testtitle">오늘의 검사 타이틀</div>
          <div className="testlistbox">오늘의 검사</div>
        </div>
        {/* 오늘의 검사 끝 */}

        {/* 이전 검사 메뉴 */}
        <div>
          <div>이전 검사 타이틀</div>
          <div>이전 검사</div>
        </div>
        {/* 이전검사메뉴 끝 */}
      </div>
      {/* 메인화면끝 */}
    </>
  );
}

export default Home;
