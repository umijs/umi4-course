import React, { useState, useEffect } from "react";

export default function List() {
  const [name, setName] = useState("learn umi");
  const [effect, setEffect] = useState("no");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setEffect(name === "umi 入门教程" ? "yes" : "no");
  }, [name]);
  useEffect(() => {
    console.log("page init");
    const timekey = setInterval(() => {
      console.log("每秒调用一次");
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      // 清除
      clearInterval(timekey);
    };
  }, []);
  return (
    <div>
      <h1>count:{count}</h1>
      <h1>{name}</h1>
      <h1>name change:{effect}</h1>
      <button
        onClick={() => {
          setName("umi 入门教程");
        }}
      >
        Click Me!
      </button>
    </div>
  );
}
