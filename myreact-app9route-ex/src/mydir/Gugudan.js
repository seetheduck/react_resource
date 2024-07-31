import React, { useState } from "react";

const Gugudan = () => {
  const [gugu, setGugu] = useState("1");
  const [res, setRes] = useState([]);

  const danFunc = (e) => {
    setGugu(e.target.value);
  };

  const resFunc = () => {
    const results = [];
    for (let i = 1; i < 10; i++) {
      results.push(`${gugu} * ${i} = ${gugu * i}`);
    }
    setRes([...results]);
  };

  return (
    <div>
      단 입력 :<input type="text" onChange={danFunc}></input>
      <button onClick={resFunc}>계산하기</button><br/>
      결과 ⬇️
      <ul>
        {res.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </ul>
    </div>
  );
};

export default Gugudan;
