import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Gugudan from "./mydir/Gugudan";
import Main from "./mydir/Main";
import JikwonInfo from "./mydir/JikwonInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>라우팅 문제 풀 기 허허</h2>
        <nav>
          <Link to="/">메인</Link>&nbsp;&nbsp;
          <Link to="/gugu">구구단</Link>&nbsp;&nbsp;
          <Link to="/jik">직원정보</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/gugu" element={<Gugudan />}></Route>
          <Route path="/jik" element={<JikwonInfo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
