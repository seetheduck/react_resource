import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Test from "./exam/Test";
import About from "./exam/About";

function App() {
  return (
    <Router>
    <div className="App">
      <h2>라우트 연습용 메인 화면</h2>
      <Test/>
      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link는 a태그로 전환됨 : 요청명 개념으로 이해 */}
        <Link to="/">Test 화면</Link> | 
        <Link to="/about">about 보기</Link> | 
        
      </nav>
      <Routes>
        {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
        <Route path="/" element={<Test/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
