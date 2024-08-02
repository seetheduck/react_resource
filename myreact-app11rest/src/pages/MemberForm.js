import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberForm(){
    const navigate = useNavigate();
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSave = () => {
        // ajax 요청 (post 방식) 설정
        axios.post(`/member`, state)
        .then(res => {
            if(res.data.isSuccess){
                alert("추가 성공 ㅋ.ㅋ")
                navigate("/member");    // 추가 후 목록보기
            }
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <>
        <h2>* 회원 입력 *</h2>
        <input onChange={handleChange} type="text" name="name" placeholder="이름 입력"></input><br/>
        <input onChange={handleChange} type="text" name="addr" placeholder="주소 입력"></input><br/>
        <button onClick={handleSave}>추가</button>
        </>
    )
}
