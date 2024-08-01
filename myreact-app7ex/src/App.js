import React, { useState } from "react";
import UnitConv from "./mydir/UnitConv";

function App() {
  // num 상태와 numConv 상태를 초기화
  const [num, setNum] = useState(""); // 미터
  const [numConv, setNumConv] = useState(""); // 센티미터

  // 입력 필드의 값이 변경될 때 호출되는 함수
  const handleChange = (e) => {
    setNum(e.target.value); // 입력 필드의 값을 num 상태로 설정
  };

  // 폼이 제출될 때 호출되는 함수.
  const changeUnit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    const numC = Number(num) * 100; // num 값을 숫자로 변환하고 100을 곱하기
    setNumConv(numC); // 변환된 값을 numConv 상태로 설정
  };

  return (
    <div className="App">
      <h3>📐길이 환산📏</h3>
      <form onSubmit={changeUnit}>
        {" "}
        {/* 폼이 제출될 때 changeUnit 함수가 호출 */}
        미터 :{" "}
        <input type="text"
          onChange={handleChange} // 입력 필드의 값이 변경될 때 handleChange 함수가 호출
        />
        <UnitConv unitConv={numConv} />{" "}
        {/* UnitConv 컴포넌트에 numConv 상태를 props로 전달 */}
        <button type="submit">계산</button> {/* 버튼을 클릭하면 폼이 제출 */}
      </form>
    </div>
  );
}

export default App;
