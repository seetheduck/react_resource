import { Route, Routes } from 'react-router-dom';
import './css/custom.css';
import Home from './pages/Home';
import Member from './pages/Member';
import MemberForm from './pages/MemberForm';
import MemberUpdateForm from './pages/MemberUpdateForm';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/member' element={<Member/>}></Route>
        <Route path='/member/new' element={<MemberForm/>}></Route>
        <Route path='/member/:num/edit' element={<MemberUpdateForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
