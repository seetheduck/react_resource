import React, { Component } from 'react';
import './App.css';
import Navdata from './mydir/navdata';


// 클래스 컴포넌트. 조립식 프로그래밍 가능
class Subject extends Component{
  render(){
    return(
      <header>
        <h1>머리글 : 웹 문서</h1>
      </header>
    );
  }
}

// 함수 컴포넌트
function Welcome(props){
  return(
    <article>
      글 기사 내용<br/>
      {props.who}
    </article>
  );
}

function App() {
  return (
    <div>
     연습용
     <Subject/>  {/* 컴포넌트 호출 */}
     <br></br>
     <Welcome></Welcome>
     <br/>
     <Welcome who='나당'/>
     <br/>
     <Navdata msg="출발"></Navdata>
    </div>
  );
}

export default App;
