import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Test from "./exam/Test";
import About from "./exam/About";
import Counter from "./exam/Count";
import Input1 from "./exam/Input1";
import Input2 from "./exam/Input2";
import Multidata from "./exam/Multidata";
import MyAjax from "./exam/MyAjax";

function App() {
  return (
    <Router>
    <div className="App">
      <h2>라우트 연습용 메인 화면</h2>
      <Test/>
      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link는 a태그로 전환됨 : 요청명 개념으로 이해 */}
        <Link to="/">Test 화면</Link> | &nbsp;
        <Link to="/about">about 보기</Link> | &nbsp;
        <Link to="/count">친구 추가/삭제</Link> | &nbsp;
        <Link to="/input1">자료 입력1</Link> | &nbsp;
        <Link to="/input2">자료 입력2</Link> | &nbsp;
        <Link to="/multi">배열 자료</Link> | &nbsp;
        <Link to="/ajax">ajax 자료</Link> | &nbsp;
      </nav>
      <Routes>
        {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
        <Route path="/" element={<Test/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/count" element={<Counter/>}></Route>
        <Route path="/input1" element={<Input1/>}></Route>
        <Route path="/input2" element={<Input2/>}></Route>
        <Route path="/multi" element={<Multidata/>}></Route>9
        <Route path="/ajax" element={<MyAjax/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
