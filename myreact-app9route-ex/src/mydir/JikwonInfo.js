import React, { useEffect, useState } from "react";

const JikwonInfo = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jikwons, setJikwons] = useState([]);

  // useEffect Hook : 컴포넌트가 마운트될 때 실행
  useEffect(() => {
    fetch("/web_react/abc.jsp", { method: "GET" })
      .then((res) => {
        // 응답 확인
        if (!res.ok) {
          throw new Error("network response was not ok");
        }
        return res.json(); // JSON 형태로 응답 반환
      })
      .then(
        (result) => {
          // 응답이 성공적일 경우
          setIsLoaded(true);
          setJikwons(result.jikwon); // 여기의 jikwon은 이클립스에서 만든 json 파일의 jikwon
        },
        (error) => {
          // 오류가 발생했을 경우
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); // 빈 배열을 두 번째 인자로 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  if (error) {
    return <div>에러 : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>자료 로딩중...</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>사번</th>
            <th>직원명</th>
            <th>부서명</th>
            <th>직급</th>
          </tr>
        </thead>
        <tbody>
          {jikwons?.map((jikwon) => (
            <tr key={jikwon.jikwon_no}>
              <td>{jikwon.jikwon_no}</td>
              <td>{jikwon.jikwon_name}</td>
              <td>{jikwon.buser_name}</td>
              <td>{jikwon.jikwon_jik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default JikwonInfo;
