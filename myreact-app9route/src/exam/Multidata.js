import React from "react";

// Member 컴포넌트
const Member = ({memberData}) => {
    return(
        <tr>
            <td>{memberData.name}</td>
            <td>{memberData.tel}</td>
        </tr>
    );
}

// 메인 컴포넌트
const Multidata = () => {
    const members = [
        {name:'관우', tel:'111-1111'},
        {name:'장비', tel:'222-1111'},
        {name:'유비', tel:'333-1111'},
    ]

    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th><th>전화</th>
                </tr>
            </thead>
            <tbody>
                {/* 배열 렌더링시 각 요소에 고유 key를 추가 */}
                {members.map((mem, index) => (
                <Member key={index} memberData={mem}/>
                ))}
            </tbody>
        </table>
    )
}


export default Multidata;