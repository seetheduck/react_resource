import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm(){
    const navigate = useNavigate();
    const {num} = useParams();
    
    const [state, setState] = useState({
        num:0,
        name:"",
        addr:"",
    });

    useEffect(() => {
            // ajax 요청(get 방식) 설정 : 수정 자료 읽기
            axios.get(`/member/${num}`)
            .then(res => {
                // 서버로부터 응답된 데이터를 이용해서 state를 수정
                // res.data는 {num:1, name:'공기밥', addr:'강남구'}
                setState(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [num]);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSave = () => {
        // ajax 요청 (put 방식) 설정
        axios.put(`/member/${num}`, state)
        .then(res => {
            if(res.data.isSuccess){
                alert("수정 성공 ㅋ.ㅋ")
                navigate("/member");    // 추가 후 목록보기
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <>
        <h2>ㅎ 회원 정보 수정 ㅎ</h2>
        <div>
            <label>이름 : </label>
            <input type="text" name="name" onChange={handleChange}/>
        </div>
        <div>
            <label>주소 : </label>
            <input type="text" name="addr" onChange={handleChange}/>
        </div>
        <button onClick={handleSave}>확인</button>
        </>
    )
}