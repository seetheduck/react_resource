import React, { useState } from 'react';
import './App.css';
import Subject from './mydir/Subject';
import Welcome from './mydir/Func';

// const App = () =>{
function App() {
  const [subject, setSubject] = useState({title:'웹문서', subtitle:'넘 배고팡 졸령'})
  const [friends] = useState([
    {bun:1, irum:'관우', nai:33},
    {bun:2, irum:'장비', nai:29},
    {bun:3, irum:'유비', nai:35},
  ]);

  const handelChangePage = () => {
    // friends 배열값 콘솔에 출력
    friends.forEach(friend =>{
      console.log(`${friend.bun}번 ${friend.irum}님 나이는 ${friend.nai}살 임다`)
  });

  setSubject(prevSubject => ({  // 이전 상태인 prevSubject(subject)을 받아 변환
    ...prevSubject,
    title:'버튼에 의해 제목 변경'
  }));
}

  return (
    <div className="App">
      <br></br>
      이벤트 연습<br/>
      <Subject 
        title = {subject.title}
        subtitle = {subject.subtitle}
        changePage = {handelChangePage}
      />
      {/* changePage : App에서 Subject 컴포넌트로 전달되는 이벤트 핸들러 */}
      <br/>
      <Welcome
        title = {subject.title}
        friends = {friends}
        changePage = {handelChangePage}
      />
    </div>
  );
}

export default App;
