import React, { useState } from "react";
import Child from "./mydir/Child";

function App() {
  // App 컴포넌트(함수)가 호출될 때 함수 내의 내용을 차례대로 수행(렌더링)

  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChileAge] = useState(3);

  const changeFatherAge = () => {
    setFatherAge(fatherAge + 1);
  }

  const changeChildAge = () => {
    setChileAge(childAge + 1);
  }

  console.log('아빠 나이가 변경됨 - 렌더링');

  const boxstyle = {border:'2px solid', padding:'10px'};

  return (
    <div style={boxstyle}>
      <h2>아빠 : 배고파님</h2>
      <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changeFatherAge}>나이 증가</button>
      <hr/>
      <Child irum={'너무 집가고팡'} nai={childAge} />
      <button onClick={changeChildAge}>나이 증가</button>
    </div>
  );
}

export default App;
