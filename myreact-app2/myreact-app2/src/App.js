import { useState } from 'react';
import './App.css';
import HookTest from './mydir/HookTest';
import HookTest2 from './mydir/HookTest2';


//class App extends Component{ ... render(){ ... return(JSX)}

// function App() {...}

// class App extends Component {
//   state = {
//     count:0
//   };

//   countUpdate(n) {
//     this.setState({count:n});
//   }

//   render() {
//     const {count} = this.state;  // const 나 let으로 변수 설정
//     return(
//       <div>
//         number : {count} &nbsp;
//         <button onClick={() => {
//           this.countUpdate(count + 1);
//         }}>증가 1</button>
//         <hr/>
//         <HookTest />
//         <hr/>
//         <HookTest2 />
//       </div>
//     );
//   }
// }

const App = () => {
  const [count, setCount] = useState(0);

  const countUpdate = (n) => {  // 이벤트 핸들러(처리) 함수
    setCount(n);
  };

  return (
    <div>
      number : {count}&nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HookTest2 />
    </div>
  );
};

export default App;
