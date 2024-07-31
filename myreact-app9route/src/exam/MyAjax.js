import React, { useEffect, useState } from "react";

const MyAjax = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    // fetch를 이용해 jsp 자료(Apache server) 읽기
    // Ajax 처리 성공하면 isLoaded와 items를 갱신
    // CORS 처리는 package.json에 등록 "proxy":"http://localhost:80"
    // SOP (Same Origin Policy, 동일 출처 정책)
    // 다른 출처의 리소스가 필요하다면 CORS 사용
    // A server <-> B server는 CORS 에러가 나지 않는다.

    useEffect(() => {
        fetch("/web_react/abc.jsp", {method:'GET'})
        .then(res => {
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.items);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    // error가 나면 에러 메세지를, isLoaded가 false면 로딩 메세지를 출력
    // 그 외엔 items를 출력(렌더링)한다.

    if(error){
        return <div>에러 : {error.message}</div>
    }else if(!isLoaded){
        return <div>자료 로딩중...</div>
    }else{
        return(
            <ul>
                {items.map(item => (
                    <li>
                        {item.code} {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }

}

export default MyAjax;