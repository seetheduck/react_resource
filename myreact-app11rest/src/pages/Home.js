import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <h1>메인 페이지</h1>
            <h2>직원자료</h2>
            <ul>
                <li>
                    <Link to="/member">회원 목록</Link>
                </li>
            </ul>
            <h2>공지사항</h2>
            
        </>
    )
}