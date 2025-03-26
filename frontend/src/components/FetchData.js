import React, { useState } from "react";

const FetchData = () => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState({
    id: "undefined",
    age: "undefined",
    name: "undefined",
    job: "undefined",
  });

  const fetchData = () => {
    if (!userId) {
      alert("ID를 입력하세요.");
      return;
    }

    fetch(`http://localhost:3002/fetch/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setData({
          id: data.id ?? "undefined",
          age: data.age ?? "undefined",
          name: data.name ?? "undefined",
          job: data.job ?? "undefined",
        });
      })
      .catch((error) => console.error("데이터 조회 오류:", error));
  };

  return (
    <div className="profileBox">
      <input
        type="text"
        id="userId"
        placeholder="ID 입력"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchData}>조회</button>
      <div id="result">
        <p>
          <strong>id:</strong> <span>{data.id}</span>
        </p>
        <p>
          <strong>age:</strong> <span>{data.age}</span>
        </p>
        <p>
          <strong>name:</strong> <span>{data.name}</span>
        </p>
        <p>
          <strong>job:</strong> <span>{data.job}</span>
        </p>
      </div>
    </div>
  );
};

export default FetchData;
