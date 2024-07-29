import React, { useState } from 'react';
import './App.css';

function App() {
  // 일반 데이터
  let irum = 'JSX 사용법 : 일반 데이터';

  // state 데이터 : const, let 등으로 선언한 변수와 다르게 값이 변하면 관련 있는 컴포넌트들이 re-rendering되어 화면이 바뀐다.
  let [jemok, setJemokFunc] = useState('자바스크립트'); // 문자열 기억
  let [jemok2, setJemokFunc2] = useState(['리액트', '뷰']); // 배열 자료 기억

  // 이벤트 처리 함수
  function dataUpdate(){
    // let newArr = [...jemok];  // 전개 연산자(...) 에 의해 문자열이 각 문자별로 분리되어 배열로 복사
    // console.log(newArr);
    jemok = 'react 만세요';
    setJemokFunc(jemok);  // jemok state는 setJemokFunc 함수로 값을 갱신
    console.log(jemok);
  }

  function dataUpdate2(){
    let newArr = [...jemok2]; // 배열의 일부 수정을 위해 전개 연산자로 복사
    console.log(newArr);
    newArr[1] = "뷰 화이팅"   // newArr[1] 값 변경
    setJemokFunc2(newArr);  // jemok2 값을 변경하기 위해 setJemokFunc2 함수 사용
  }

  let [count, setCount] = useState(0);
  

  return (
    <div className="App">
      <div className='bluebar'>
      <h1>리액트 state 이해</h1>
      </div>

      <div className='list'>
        <h3>{jemok}</h3>
        <span>{irum}</span><br/>
        <p>state 확인</p>
        <button onClick={dataUpdate}>제목 값 변경</button>
        <hr/>
      </div>

      <div className='list'>
        <h3>jemok2[0] : {jemok2[0]}</h3>
        <span>jemok2[1] : {jemok2[1]}</span><br/>
        <p>state 확인</p>
        <button onClick={dataUpdate2}>제목 값 변경</button>
        <hr/>
      </div>

      <div>
        이모티콘 클릭 : <span onClick={
          () => {setCount(count + 1)}
        }>😂😂</span>{count}번 클릭 ㅎ.ㅎ
      </div>
    </div>
  );
}

export default App;
